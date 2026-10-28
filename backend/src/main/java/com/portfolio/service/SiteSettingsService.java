package com.portfolio.service;

import com.portfolio.dto.DashboardStatsDto;
import com.portfolio.dto.SiteSettingsDto;
import com.portfolio.entity.SiteSettings;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ExperienceRepository;
import com.portfolio.repository.SiteSettingsRepository;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class SiteSettingsService {

    private final SiteSettingsRepository siteSettingsRepository;
    private final ProjectService projectService;
    private final SkillRepository skillRepository;
    private final CertificateService certificateService;
    private final ExperienceRepository experienceRepository;

    public SiteSettingsDto getSiteSettings() {
        SiteSettings settings = siteSettingsRepository.findAll().stream().findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Site settings not found"));
        return toDto(settings);
    }

    @Transactional
    public SiteSettingsDto updateSiteSettings(SiteSettingsDto dto) {
        SiteSettings settings = siteSettingsRepository.findAll().stream().findFirst()
                .orElseGet(SiteSettings::new);
        settings = fromDto(dto, settings);
        return toDto(siteSettingsRepository.save(settings));
    }

    public DashboardStatsDto getDashboardStats() {
        return DashboardStatsDto.builder()
                .totalProjects(projectService.count())
                .totalSkills(skillRepository.count())
                .totalCertificates(certificateService.count())
                .totalExperiences(experienceRepository.count())
                .build();
    }

    private SiteSettingsDto toDto(SiteSettings s) {
        return SiteSettingsDto.builder()
                .id(s.getId())
                .siteTitle(s.getSiteTitle())
                .siteDescription(s.getSiteDescription())
                .logoUrl(s.getLogoUrl())
                .faviconUrl(s.getFaviconUrl())
                .footerText(s.getFooterText())
                .build();
    }

    private SiteSettings fromDto(SiteSettingsDto dto, SiteSettings s) {
        s.setSiteTitle(dto.getSiteTitle());
        s.setSiteDescription(dto.getSiteDescription());
        s.setLogoUrl(dto.getLogoUrl());
        s.setFaviconUrl(dto.getFaviconUrl());
        s.setFooterText(dto.getFooterText());
        return s;
    }
}
