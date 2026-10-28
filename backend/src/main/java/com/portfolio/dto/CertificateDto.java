package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CertificateDto {
    private Long id;
    private String title;
    private String issuer;
    private LocalDate issueDate;
    private String issueDateDisplay;
    private String credentialUrl;
    private String imageUrl;
    private String description;
    private List<String> skills;
    private Integer sortOrder;
}
