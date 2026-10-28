package com.portfolio.controller;

import com.portfolio.dto.*;
import com.portfolio.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PublicController {

    private final ProfileService profileService;
    private final AboutService aboutService;
    private final SkillService skillService;
    private final ExperienceService experienceService;
    private final EducationService educationService;
    private final ProjectService projectService;
    private final CertificateService certificateService;
    private final SocialLinkService socialLinkService;
    private final ContactService contactService;
    private final SiteSettingsService siteSettingsService;

    @GetMapping("/api/profile")
    public ProfileDto getProfile() {
        return profileService.getProfile();
    }

    @GetMapping("/api/about")
    public AboutDto getAbout() {
        return aboutService.getAbout();
    }

    @GetMapping("/api/skills")
    public List<SkillDto> getSkills() {
        return skillService.getAllSkills();
    }

    @GetMapping("/api/experience")
    public List<ExperienceDto> getExperience() {
        return experienceService.getAllExperiences();
    }

    @GetMapping("/api/education")
    public List<EducationDto> getEducation() {
        return educationService.getAllEducation();
    }

    @GetMapping("/api/projects")
    public List<ProjectDto> getProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/api/certificates")
    public List<CertificateDto> getCertificates() {
        return certificateService.getAllCertificates();
    }

    @GetMapping("/api/social-links")
    public List<SocialLinkDto> getSocialLinks() {
        return socialLinkService.getAllSocialLinks();
    }

    @GetMapping("/api/contact")
    public ContactSettingsDto getContact() {
        return contactService.getContactSettings();
    }

    @GetMapping("/api/site-settings")
    public SiteSettingsDto getSiteSettings() {
        return siteSettingsService.getSiteSettings();
    }
}
