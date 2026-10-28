package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDto {
    private Long id;
    private String fullName;
    private String professionalTitle;
    private String tagline;
    private String profileImageUrl;
    private String resumeUrl;
    private String email;
    private String phone;
    private String location;
    private String githubUrl;
    private String linkedinUrl;
    private String instagramUrl;
    private String websiteUrl;
    private LocalDateTime updatedAt;
}
