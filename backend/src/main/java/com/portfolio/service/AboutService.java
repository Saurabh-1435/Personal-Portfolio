package com.portfolio.service;

import com.portfolio.dto.AboutDto;
import com.portfolio.entity.About;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.AboutRepository;
import com.portfolio.util.JsonUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AboutService {

    private static final String WHAT_DRIVES_ME_KEY = "whatDrivesMe";

    private final AboutRepository aboutRepository;

    public AboutDto getAbout() {
        About about = aboutRepository.findAll().stream().findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("About section not found"));
        return toDto(about);
    }

    @Transactional
    public AboutDto createAbout(AboutDto dto) {
        if (!aboutRepository.findAll().isEmpty()) {
            throw new IllegalStateException("About already exists. Use PUT to update.");
        }
        About about = fromDto(dto, new About());
        return toDto(aboutRepository.save(about));
    }

    @Transactional
    public AboutDto updateAbout(AboutDto dto) {
        About about = aboutRepository.findAll().stream().findFirst()
                .orElseGet(About::new);
        about = fromDto(dto, about);
        return toDto(aboutRepository.save(about));
    }

    private AboutDto toDto(About a) {
        String whatDrivesMe = null;
        String mainDescription = a.getDescription();

        if (a.getDescription() != null && a.getDescription().contains(WHAT_DRIVES_ME_KEY)) {
            try {
                Map<String, String> parsed = new com.fasterxml.jackson.databind.ObjectMapper()
                        .readValue(a.getDescription(), new com.fasterxml.jackson.core.type.TypeReference<Map<String, String>>() {});
                mainDescription = parsed.get("aboutMe");
                whatDrivesMe = parsed.get(WHAT_DRIVES_ME_KEY);
            } catch (Exception ignored) {
                // use raw description
            }
        }

        return AboutDto.builder()
                .id(a.getId())
                .heading(a.getHeading())
                .description(mainDescription != null ? mainDescription : a.getDescription())
                .whatDrivesMe(whatDrivesMe)
                .yearsOfExperience(a.getYearsOfExperience())
                .build();
    }

    private About fromDto(AboutDto dto, About a) {
        a.setHeading(dto.getHeading());
        a.setYearsOfExperience(dto.getYearsOfExperience());

        if (dto.getWhatDrivesMe() != null && !dto.getWhatDrivesMe().isBlank()) {
            Map<String, String> combined = new HashMap<>();
            combined.put("aboutMe", dto.getDescription());
            combined.put(WHAT_DRIVES_ME_KEY, dto.getWhatDrivesMe());
            try {
                a.setDescription(new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(combined));
            } catch (Exception e) {
                a.setDescription(dto.getDescription());
            }
        } else {
            a.setDescription(dto.getDescription());
        }
        return a;
    }
}
