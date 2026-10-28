package com.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SiteSettingsDto {
    private Long id;
    private String siteTitle;
    private String siteDescription;
    private String logoUrl;
    private String faviconUrl;
    private String footerText;
}
