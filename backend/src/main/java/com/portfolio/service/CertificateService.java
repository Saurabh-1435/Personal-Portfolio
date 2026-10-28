package com.portfolio.service;

import com.portfolio.dto.CertificateDto;
import com.portfolio.entity.Certificate;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.CertificateRepository;
import com.portfolio.util.JsonUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CertificateService {

    private final CertificateRepository certificateRepository;

    public List<CertificateDto> getAllCertificates() {
        return certificateRepository.findAllByOrderBySortOrderAsc().stream().map(this::toDto).toList();
    }

    public CertificateDto getById(Long id) {
        return toDto(findById(id));
    }

    @Transactional
    public CertificateDto create(CertificateDto dto) {
        Certificate certificate = fromDto(dto, new Certificate());
        return toDto(certificateRepository.save(certificate));
    }

    @Transactional
    public CertificateDto update(Long id, CertificateDto dto) {
        Certificate certificate = fromDto(dto, findById(id));
        return toDto(certificateRepository.save(certificate));
    }

    @Transactional
    public void delete(Long id) {
        certificateRepository.delete(findById(id));
    }

    public long count() {
        return certificateRepository.count();
    }

    private Certificate findById(Long id) {
        return certificateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Certificate not found: " + id));
    }

    private CertificateDto toDto(Certificate c) {
        return CertificateDto.builder()
                .id(c.getId())
                .title(c.getTitle())
                .issuer(c.getIssuer())
                .issueDate(c.getIssueDate())
                .issueDateDisplay(c.getIssueDate() != null ? String.valueOf(c.getIssueDate().getYear()) : null)
                .credentialUrl(c.getCredentialUrl())
                .imageUrl(c.getImageUrl())
                .description(c.getDescription())
                .skills(JsonUtil.fromJson(c.getSkills()))
                .sortOrder(c.getSortOrder())
                .build();
    }

    private Certificate fromDto(CertificateDto dto, Certificate c) {
        c.setTitle(dto.getTitle());
        c.setIssuer(dto.getIssuer());
        c.setIssueDate(dto.getIssueDate());
        c.setCredentialUrl(dto.getCredentialUrl());
        c.setImageUrl(dto.getImageUrl());
        c.setDescription(dto.getDescription());
        c.setSkills(JsonUtil.toJson(dto.getSkills()));
        c.setSortOrder(dto.getSortOrder());
        return c;
    }
}
