package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AboutDto {
    private Long id;
    private String heading;
    private String description;
    private String whatDrivesMe;
    private Integer yearsOfExperience;
}
