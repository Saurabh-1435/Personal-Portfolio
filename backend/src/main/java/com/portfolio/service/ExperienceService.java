package com.portfolio.service;

import com.portfolio.dto.ExperienceDto;
import com.portfolio.entity.Experience;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ExperienceRepository;
import com.portfolio.util.JsonUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class ExperienceService {

    private static final DateTimeFormatter MONTH_YEAR = DateTimeFormatter.ofPattern("MMMM yyyy", Locale.ENGLISH);

    private final ExperienceRepository experienceRepository;

    public List<ExperienceDto> getAllExperiences() {
        return experienceRepository.findAllByOrderBySortOrderAsc().stream().map(this::toDto).toList();
    }

    public ExperienceDto getById(Long id) {
        return toDto(findById(id));
    }

    @Transactional
    public ExperienceDto create(ExperienceDto dto) {
        Experience experience = fromDto(dto, new Experience());
        return toDto(experienceRepository.save(experience));
    }

    @Transactional
    public ExperienceDto update(Long id, ExperienceDto dto) {
        Experience experience = fromDto(dto, findById(id));
        return toDto(experienceRepository.save(experience));
    }

    @Transactional
    public void delete(Long id) {
        experienceRepository.delete(findById(id));
    }

    private Experience findById(Long id) {
        return experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Experience not found: " + id));
    }

    private ExperienceDto toDto(Experience e) {
        List<String> bullets = JsonUtil.jsonToBulletPoints(e.getDescription());
        String periodDisplay = buildPeriodDisplay(e);

        return ExperienceDto.builder()
                .id(e.getId())
                .companyName(e.getCompanyName())
                .position(e.getPosition())
                .employmentType(e.getEmploymentType())
                .startDate(e.getStartDate())
                .endDate(e.getEndDate())
                .currentlyWorking(e.getCurrentlyWorking())
                .location(e.getLocation())
                .description(e.getDescription())
                .bulletPoints(bullets)
                .companyUrl(e.getCompanyUrl())
                .sortOrder(e.getSortOrder())
                .periodDisplay(periodDisplay)
                .build();
    }

    private Experience fromDto(ExperienceDto dto, Experience e) {
        e.setCompanyName(dto.getCompanyName());
        e.setPosition(dto.getPosition());
        e.setEmploymentType(dto.getEmploymentType());
        e.setStartDate(dto.getStartDate());
        e.setEndDate(dto.getEndDate());
        e.setCurrentlyWorking(dto.getCurrentlyWorking());
        e.setLocation(dto.getLocation());
        e.setCompanyUrl(dto.getCompanyUrl());
        e.setSortOrder(dto.getSortOrder());

        if (dto.getBulletPoints() != null && !dto.getBulletPoints().isEmpty()) {
            e.setDescription(JsonUtil.bulletPointsToJson(dto.getBulletPoints()));
        } else {
            e.setDescription(dto.getDescription());
        }
        return e;
    }

    private String buildPeriodDisplay(Experience e) {
        if (e.getStartDate() == null && e.getEndDate() == null) {
            if (e.getEmploymentType() != null && !e.getEmploymentType().isBlank()) {
                return e.getEmploymentType();
            }
            return "";
        }
        String start = e.getStartDate() != null ? MONTH_YEAR.format(e.getStartDate()) : "";
        String end = Boolean.TRUE.equals(e.getCurrentlyWorking()) ? "Present"
                : (e.getEndDate() != null ? MONTH_YEAR.format(e.getEndDate()) : "");
        if (!start.isEmpty() && !end.isEmpty()) {
            return start + " — " + end;
        }
        return start.isEmpty() ? end : start;
    }
}
