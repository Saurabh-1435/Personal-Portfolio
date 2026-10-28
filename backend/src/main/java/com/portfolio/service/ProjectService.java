package com.portfolio.service;

import com.portfolio.dto.ProjectDto;
import com.portfolio.entity.Project;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.util.JsonUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<ProjectDto> getAllProjects() {
        return projectRepository.findAllByOrderBySortOrderAsc().stream().map(this::toDto).toList();
    }

    public ProjectDto getById(Long id) {
        return toDto(findById(id));
    }

    @Transactional
    public ProjectDto create(ProjectDto dto) {
        Project project = fromDto(dto, new Project());
        return toDto(projectRepository.save(project));
    }

    @Transactional
    public ProjectDto update(Long id, ProjectDto dto) {
        Project project = fromDto(dto, findById(id));
        return toDto(projectRepository.save(project));
    }

    @Transactional
    public void delete(Long id) {
        projectRepository.delete(findById(id));
    }

    public long count() {
        return projectRepository.count();
    }

    private Project findById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found: " + id));
    }

    private ProjectDto toDto(Project p) {
        return ProjectDto.builder()
                .id(p.getId())
                .title(p.getTitle())
                .description(p.getDescription())
                .imageUrl(p.getImageUrl())
                .technologies(JsonUtil.fromJson(p.getTechnologies()))
                .githubUrl(p.getGithubUrl())
                .liveUrl(p.getLiveUrl())
                .videoUrl(p.getVideoUrl())
                .category(p.getCategory())
                .featured(p.getFeatured())
                .sortOrder(p.getSortOrder())
                .build();
    }

    private Project fromDto(ProjectDto dto, Project p) {
        p.setTitle(dto.getTitle());
        p.setDescription(dto.getDescription());
        p.setImageUrl(dto.getImageUrl());
        p.setTechnologies(JsonUtil.toJson(dto.getTechnologies()));
        p.setGithubUrl(dto.getGithubUrl());
        p.setLiveUrl(dto.getLiveUrl());
        p.setVideoUrl(dto.getVideoUrl());
        p.setCategory(dto.getCategory());
        p.setFeatured(dto.getFeatured() != null ? dto.getFeatured() : false);
        p.setSortOrder(dto.getSortOrder());
        return p;
    }
}
