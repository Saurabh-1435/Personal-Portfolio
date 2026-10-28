package com.portfolio.service;

import com.portfolio.dto.SocialLinkDto;
import com.portfolio.entity.SocialLink;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.SocialLinkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SocialLinkService {

    private final SocialLinkRepository socialLinkRepository;

    public List<SocialLinkDto> getAllSocialLinks() {
        return socialLinkRepository.findAllByOrderBySortOrderAsc().stream().map(this::toDto).toList();
    }

    public SocialLinkDto getById(Long id) {
        return toDto(findById(id));
    }

    @Transactional
    public SocialLinkDto create(SocialLinkDto dto) {
        SocialLink link = fromDto(dto, new SocialLink());
        return toDto(socialLinkRepository.save(link));
    }

    @Transactional
    public SocialLinkDto update(Long id, SocialLinkDto dto) {
        SocialLink link = fromDto(dto, findById(id));
        return toDto(socialLinkRepository.save(link));
    }

    @Transactional
    public void delete(Long id) {
        socialLinkRepository.delete(findById(id));
    }

    private SocialLink findById(Long id) {
        return socialLinkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Social link not found: " + id));
    }

    private SocialLinkDto toDto(SocialLink s) {
        return SocialLinkDto.builder()
                .id(s.getId())
                .platform(s.getPlatform())
                .url(s.getUrl())
                .icon(s.getIcon())
                .sortOrder(s.getSortOrder())
                .build();
    }

    private SocialLink fromDto(SocialLinkDto dto, SocialLink s) {
        s.setPlatform(dto.getPlatform());
        s.setUrl(dto.getUrl());
        s.setIcon(dto.getIcon());
        s.setSortOrder(dto.getSortOrder());
        return s;
    }
}
