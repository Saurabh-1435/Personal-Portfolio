package com.portfolio.service;

import com.portfolio.dto.ContactSettingsDto;
import com.portfolio.entity.ContactSettings;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ContactSettingsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactSettingsRepository contactSettingsRepository;

    public ContactSettingsDto getContactSettings() {
        ContactSettings settings = contactSettingsRepository.findAll().stream().findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Contact settings not found"));
        return toDto(settings);
    }

    @Transactional
    public ContactSettingsDto updateContactSettings(ContactSettingsDto dto) {
        ContactSettings settings = contactSettingsRepository.findAll().stream().findFirst()
                .orElseGet(ContactSettings::new);
        settings = fromDto(dto, settings);
        return toDto(contactSettingsRepository.save(settings));
    }

    private ContactSettingsDto toDto(ContactSettings c) {
        return ContactSettingsDto.builder()
                .id(c.getId())
                .email(c.getEmail())
                .phone(c.getPhone())
                .location(c.getLocation())
                .githubUrl(c.getGithubUrl())
                .linkedinUrl(c.getLinkedinUrl())
                .instagramUrl(c.getInstagramUrl())
                .build();
    }

    private ContactSettings fromDto(ContactSettingsDto dto, ContactSettings c) {
        c.setEmail(dto.getEmail());
        c.setPhone(dto.getPhone());
        c.setLocation(dto.getLocation());
        c.setGithubUrl(dto.getGithubUrl());
        c.setLinkedinUrl(dto.getLinkedinUrl());
        c.setInstagramUrl(dto.getInstagramUrl());
        return c;
    }
}
