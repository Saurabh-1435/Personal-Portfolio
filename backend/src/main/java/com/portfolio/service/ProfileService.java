package com.portfolio.service;

import com.portfolio.dto.ProfileDto;
import com.portfolio.entity.Profile;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileDto getProfile() {
        Profile profile = profileRepository.findAll().stream().findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));
        return toDto(profile);
    }

    @Transactional
    public ProfileDto createProfile(ProfileDto dto) {
        if (!profileRepository.findAll().isEmpty()) {
            throw new IllegalStateException("Profile already exists. Use PUT to update.");
        }
        Profile profile = fromDto(dto, new Profile());
        return toDto(profileRepository.save(profile));
    }

    @Transactional
    public ProfileDto updateProfile(ProfileDto dto) {
        Profile profile = profileRepository.findAll().stream().findFirst()
                .orElseGet(Profile::new);
        profile = fromDto(dto, profile);
        return toDto(profileRepository.save(profile));
    }

    private ProfileDto toDto(Profile p) {
        return ProfileDto.builder()
                .id(p.getId())
                .fullName(p.getFullName())
                .professionalTitle(p.getProfessionalTitle())
                .tagline(p.getTagline())
                .profileImageUrl(p.getProfileImageUrl())
                .resumeUrl(p.getResumeUrl())
                .email(p.getEmail())
                .phone(p.getPhone())
                .location(p.getLocation())
                .githubUrl(p.getGithubUrl())
                .linkedinUrl(p.getLinkedinUrl())
                .instagramUrl(p.getInstagramUrl())
                .websiteUrl(p.getWebsiteUrl())
                .updatedAt(p.getUpdatedAt())
                .build();
    }

    private Profile fromDto(ProfileDto dto, Profile p) {
        p.setFullName(dto.getFullName());
        p.setProfessionalTitle(dto.getProfessionalTitle());
        p.setTagline(dto.getTagline());
        p.setProfileImageUrl(dto.getProfileImageUrl());
        p.setResumeUrl(dto.getResumeUrl());
        p.setEmail(dto.getEmail());
        p.setPhone(dto.getPhone());
        p.setLocation(dto.getLocation());
        p.setGithubUrl(dto.getGithubUrl());
        p.setLinkedinUrl(dto.getLinkedinUrl());
        p.setInstagramUrl(dto.getInstagramUrl());
        p.setWebsiteUrl(dto.getWebsiteUrl());
        return p;
    }
}
