package com.portfolio.controller;

import com.portfolio.dto.*;
import com.portfolio.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

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

    @GetMapping("/dashboard/stats")
    public DashboardStatsDto getDashboardStats() {
        return siteSettingsService.getDashboardStats();
    }

    @PostMapping("/profile")
    @ResponseStatus(HttpStatus.CREATED)
    public ProfileDto createProfile(@RequestBody ProfileDto dto) {
        return profileService.createProfile(dto);
    }

    @PutMapping("/profile")
    public ProfileDto updateProfile(@RequestBody ProfileDto dto) {
        return profileService.updateProfile(dto);
    }

    @PostMapping("/about")
    @ResponseStatus(HttpStatus.CREATED)
    public AboutDto createAbout(@RequestBody AboutDto dto) {
        return aboutService.createAbout(dto);
    }

    @PutMapping("/about")
    public AboutDto updateAbout(@RequestBody AboutDto dto) {
        return aboutService.updateAbout(dto);
    }

    @GetMapping("/skills")
    public List<SkillDto> getSkills() {
        return skillService.getAllSkills();
    }

    @PostMapping("/skills")
    @ResponseStatus(HttpStatus.CREATED)
    public SkillDto createSkill(@RequestBody SkillDto dto) {
        return skillService.create(dto);
    }

    @PutMapping("/skills/{id}")
    public SkillDto updateSkill(@PathVariable Long id, @RequestBody SkillDto dto) {
        return skillService.update(id, dto);
    }

    @DeleteMapping("/skills/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSkill(@PathVariable Long id) {
        skillService.delete(id);
    }

    @GetMapping("/experience")
    public List<ExperienceDto> getExperience() {
        return experienceService.getAllExperiences();
    }

    @PostMapping("/experience")
    @ResponseStatus(HttpStatus.CREATED)
    public ExperienceDto createExperience(@RequestBody ExperienceDto dto) {
        return experienceService.create(dto);
    }

    @PutMapping("/experience/{id}")
    public ExperienceDto updateExperience(@PathVariable Long id, @RequestBody ExperienceDto dto) {
        return experienceService.update(id, dto);
    }

    @DeleteMapping("/experience/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteExperience(@PathVariable Long id) {
        experienceService.delete(id);
    }

    @GetMapping("/education")
    public List<EducationDto> getEducation() {
        return educationService.getAllEducation();
    }

    @PostMapping("/education")
    @ResponseStatus(HttpStatus.CREATED)
    public EducationDto createEducation(@RequestBody EducationDto dto) {
        return educationService.create(dto);
    }

    @PutMapping("/education/{id}")
    public EducationDto updateEducation(@PathVariable Long id, @RequestBody EducationDto dto) {
        return educationService.update(id, dto);
    }

    @DeleteMapping("/education/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEducation(@PathVariable Long id) {
        educationService.delete(id);
    }

    @GetMapping("/projects")
    public List<ProjectDto> getProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping("/projects")
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectDto createProject(@RequestBody ProjectDto dto) {
        return projectService.create(dto);
    }

    @PutMapping("/projects/{id}")
    public ProjectDto updateProject(@PathVariable Long id, @RequestBody ProjectDto dto) {
        return projectService.update(id, dto);
    }

    @DeleteMapping("/projects/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProject(@PathVariable Long id) {
        projectService.delete(id);
    }

    @GetMapping("/certificates")
    public List<CertificateDto> getCertificates() {
        return certificateService.getAllCertificates();
    }

    @PostMapping("/certificates")
    @ResponseStatus(HttpStatus.CREATED)
    public CertificateDto createCertificate(@RequestBody CertificateDto dto) {
        return certificateService.create(dto);
    }

    @PutMapping("/certificates/{id}")
    public CertificateDto updateCertificate(@PathVariable Long id, @RequestBody CertificateDto dto) {
        return certificateService.update(id, dto);
    }

    @DeleteMapping("/certificates/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCertificate(@PathVariable Long id) {
        certificateService.delete(id);
    }

    @GetMapping("/social-links")
    public List<SocialLinkDto> getSocialLinks() {
        return socialLinkService.getAllSocialLinks();
    }

    @PostMapping("/social-links")
    @ResponseStatus(HttpStatus.CREATED)
    public SocialLinkDto createSocialLink(@RequestBody SocialLinkDto dto) {
        return socialLinkService.create(dto);
    }

    @PutMapping("/social-links/{id}")
    public SocialLinkDto updateSocialLink(@PathVariable Long id, @RequestBody SocialLinkDto dto) {
        return socialLinkService.update(id, dto);
    }

    @DeleteMapping("/social-links/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSocialLink(@PathVariable Long id) {
        socialLinkService.delete(id);
    }

    @GetMapping("/contact")
    public ContactSettingsDto getContact() {
        return contactService.getContactSettings();
    }

    @PutMapping("/contact")
    public ContactSettingsDto updateContact(@RequestBody ContactSettingsDto dto) {
        return contactService.updateContactSettings(dto);
    }

    @GetMapping("/site-settings")
    public SiteSettingsDto getSiteSettings() {
        return siteSettingsService.getSiteSettings();
    }

    @PutMapping("/site-settings")
    public SiteSettingsDto updateSiteSettings(@RequestBody SiteSettingsDto dto) {
        return siteSettingsService.updateSiteSettings(dto);
    }
}
