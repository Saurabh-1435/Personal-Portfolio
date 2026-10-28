package com.portfolio.repository;

import com.portfolio.entity.ContactSettings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactSettingsRepository extends JpaRepository<ContactSettings, Long> {
}
