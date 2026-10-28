package com.portfolio.service;

import com.portfolio.dto.SkillDto;
import com.portfolio.entity.Skill;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository skillRepository;

    public List<SkillDto> getAllSkills() {
        return skillRepository.findAllByOrderBySortOrderAsc().stream().map(this::toDto).toList();
    }

    public SkillDto getById(Long id) {
        return toDto(findById(id));
    }

    @Transactional
    public SkillDto create(SkillDto dto) {
        Skill skill = fromDto(dto, new Skill());
        return toDto(skillRepository.save(skill));
    }

    @Transactional
    public SkillDto update(Long id, SkillDto dto) {
        Skill skill = fromDto(dto, findById(id));
        return toDto(skillRepository.save(skill));
    }

    @Transactional
    public void delete(Long id) {
        skillRepository.delete(findById(id));
    }

    private Skill findById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found: " + id));
    }

    private SkillDto toDto(Skill s) {
        return SkillDto.builder()
                .id(s.getId())
                .name(s.getName())
                .category(s.getCategory())
                .icon(s.getIcon())
                .proficiency(s.getProficiency())
                .sortOrder(s.getSortOrder())
                .build();
    }

    private Skill fromDto(SkillDto dto, Skill s) {
        s.setName(dto.getName());
        s.setCategory(dto.getCategory());
        s.setIcon(dto.getIcon());
        s.setProficiency(dto.getProficiency());
        s.setSortOrder(dto.getSortOrder());
        return s;
    }
}
