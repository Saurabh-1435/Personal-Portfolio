package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDto {
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private List<String> technologies;
    private String githubUrl;
    private String liveUrl;
    private String videoUrl;
    private String category;
    private Boolean featured;
    private Integer sortOrder;
}
