package com.portfolio.service;

import com.portfolio.dto.EducationDto;
import com.portfolio.entity.Education;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.EducationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EducationService {

    private final EducationRepository educationRepository;

    public List<EducationDto> getAllEducation() {
        return educationRepository.findAllByOrderBySortOrderAsc().stream().map(this::toDto).toList();
    }

    public EducationDto getById(Long id) {
        return toDto(findById(id));
    }

    @Transactional
    public EducationDto create(EducationDto dto) {
        Education education = fromDto(dto, new Education());
        return toDto(educationRepository.save(education));
    }

    @Transactional
    public EducationDto update(Long id, EducationDto dto) {
        Education education = fromDto(dto, findById(id));
        return toDto(educationRepository.save(education));
    }

    @Transactional
    public void delete(Long id) {
        educationRepository.delete(findById(id));
    }

    private Education findById(Long id) {
        return educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Education not found: " + id));
    }

    private EducationDto toDto(Education e) {
        String period = buildPeriodDisplay(e);
        return EducationDto.builder()
                .id(e.getId())
                .degree(e.getDegree())
                .college(e.getCollege())
                .university(e.getUniversity())
                .startYear(e.getStartYear())
                .endYear(e.getEndYear())
                .cgpa(e.getCgpa())
                .description(e.getDescription())
                .sortOrder(e.getSortOrder())
                .periodDisplay(period)
                .icon(resolveIcon(e.getDegree()))
                .build();
    }

    private Education fromDto(EducationDto dto, Education e) {
        e.setDegree(dto.getDegree());
        e.setCollege(dto.getCollege());
        e.setUniversity(dto.getUniversity());
        e.setStartYear(dto.getStartYear());
        e.setEndYear(dto.getEndYear());
        e.setCgpa(dto.getCgpa());
        e.setDescription(dto.getDescription());
        e.setSortOrder(dto.getSortOrder());
        return e;
    }

    private String buildPeriodDisplay(Education e) {
        if (e.getStartYear() != null && e.getEndYear() != null) {
            return e.getStartYear() + "–" + e.getEndYear();
        }
        if (e.getEndYear() != null) {
            return String.valueOf(e.getEndYear());
        }
        if (e.getStartYear() != null) {
            return String.valueOf(e.getStartYear());
        }
        return "";
    }

    private String resolveIcon(String degree) {
        if (degree == null) return "📚";
        String lower = degree.toLowerCase();
        if (lower.contains("bachelor") || lower.contains("engineering")) return "🎓";
        if (lower.contains("hsc") || lower.contains("science")) return "📚";
        return "💻";
    }
}
