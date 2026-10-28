package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EducationDto {
    private Long id;
    private String degree;
    private String college;
    private String university;
    private Integer startYear;
    private Integer endYear;
    private String cgpa;
    private String description;
    private Integer sortOrder;
    private String periodDisplay;
    private String icon;
}
