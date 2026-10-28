package com.portfolio.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.portfolio.entity.*;
import com.portfolio.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final AdminRepository adminRepository;
    private final ProfileRepository profileRepository;
    private final AboutRepository aboutRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final ProjectRepository projectRepository;
    private final CertificateRepository certificateRepository;
    private final SocialLinkRepository socialLinkRepository;
    private final ContactSettingsRepository contactSettingsRepository;
    private final SiteSettingsRepository siteSettingsRepository;
    private final PasswordEncoder passwordEncoder;
    private final ObjectMapper objectMapper;

    @Value("${ADMIN_EMAIL:}")
    private String adminEmail;

    @Value("${ADMIN_PASSWORD:}")
    private String adminPassword;

    @Value("${ADMIN_NAME:Portfolio Admin}")
    private String adminName;

    @Override
    public void run(String... args) throws Exception {
        seedAdmin();
        if (profileRepository.count() == 0) {
            seedPortfolioData();
            log.info("Portfolio seed data initialized successfully");
        }
    }

    private void seedAdmin() {
        if (adminEmail != null && !adminEmail.isBlank()
                && adminPassword != null && !adminPassword.isBlank()
                && !adminRepository.existsByEmail(adminEmail)) {
            adminRepository.save(Admin.builder()
                    .name(adminName)
                    .email(adminEmail)
                    .password(passwordEncoder.encode(adminPassword))
                    .role("ADMIN")
                    .build());
            log.info("Initial admin account created for: {}", adminEmail);
        }
    }

    private void seedPortfolioData() throws Exception {
        profileRepository.save(Profile.builder()
                .fullName("Saurabh Prakash Lakhan")
                .professionalTitle("Full Stack Developer")
                .tagline("A passionate developer who loves building dynamic, scalable, and responsive web and mobile applications. Specialized in full-stack solutions using modern technologies.")
                .profileImageUrl("/saurabh-bg-.jpg")
                .resumeUrl("/resume.pdf")
                .email("saurabhlakhan4545@gmail.com")
                .phone("+91 8530587167")
                .location("Pune, Maharashtra, India")
                .githubUrl("https://github.com/Saurabh-1435")
                .linkedinUrl("https://www.linkedin.com/in/saurabh-lakhan-015777327/")
                .instagramUrl("https://www.instagram.com/iam_dev45/")
                .websiteUrl("https://merry-pie-d73c24.netlify.app/")
                .build());

        Map<String, String> aboutContent = new HashMap<>();
        aboutContent.put("aboutMe", "I am a Java Full Stack Developer with 1+ year of combined professional and internship experience, specializing in Java, Spring Boot, React.js, Hibernate, MySQL, and RESTful APIs. I enjoy building responsive, scalable, and user-friendly web applications while working across both frontend and backend development.");
        aboutContent.put("whatDrivesMe", "The intersection of creativity and technology motivates me. I constantly explore new frameworks, design patterns, and architectural techniques to stay ahead in modern development and deliver meaningful, efficient, and visually appealing solutions.");

        aboutRepository.save(About.builder()
                .heading("About Me")
                .description(objectMapper.writeValueAsString(aboutContent))
                .yearsOfExperience(1)
                .build());

        seedSkills();
        seedExperiences();
        seedEducation();
        seedProjects();
        seedCertificates();
        seedSocialLinks();
        seedContactSettings();
        seedSiteSettings();
    }

    private void seedSkills() {
        List<Skill> skills = List.of(
                skill("React", "Frontend", "FaReact", 85, 1),
                skill("HTML", "Frontend", "FaHtml5", 90, 2),
                skill("Tailwind CSS", "Frontend", "SiTailwindcss", 85, 3),
                skill("CSS", "Frontend", "FaCss3Alt", 85, 4),
                skill("JavaScript", "Frontend", "FaJs", 85, 5),
                skill("Bootstrap", "Frontend", "FaBootstrap", 80, 6),
                skill("Java", "Backend", "FaJava", 90, 7),
                skill("Spring Boot", "Backend", "SiSpringboot", 85, 8),
                skill("Hibernate", "Backend", "SiHibernate", 80, 9),
                skill("JDBC", "Backend", "TbDatabase", 75, 10),
                skill("Firebase", "Database", "SiFirebase", 70, 11),
                skill("MySQL", "Database", "SiMysql", 85, 12),
                skill("MongoDB", "Database", "SiMongodb", 70, 13),
                skill("Git", "Tools", "FaGitAlt", 85, 14),
                skill("GitHub", "Tools", "FaGithub", 85, 15),
                skill("STS", "Tools", "SiSpring", 80, 16),
                skill("Eclipse", "Tools", "SiEclipseide", 75, 17),
                skill("Postman", "Tools", "SiPostman", 85, 18),
                skill("Problem Solving", "Other", "FaBrain", 90, 19),
                skill("Team Collaboration", "Other", "FaUsers", 85, 20),
                skill("Communication", "Other", "FaComments", 85, 21),
                skill("Time Management", "Other", "FaRegClock", 80, 22),
                skill("Adaptability", "Other", "FaSync", 85, 23),
                skill("Creativity", "Other", "FaLightbulb", 85, 24)
        );
        skillRepository.saveAll(skills);
    }

    private Skill skill(String name, String category, String icon, int proficiency, int order) {
        return Skill.builder().name(name).category(category).icon(icon).proficiency(proficiency).sortOrder(order).build();
    }

    private void seedExperiences() throws Exception {
        experienceRepository.saveAll(List.of(
                Experience.builder()
                        .companyName("Accure Softech Pvt. Ltd.")
                        .position("Software Developer")
                        .employmentType("Full-time")
                        .startDate(LocalDate.of(2025, 10, 1))
                        .endDate(LocalDate.of(2026, 7, 1))
                        .currentlyWorking(false)
                        .location("Pune, India")
                        .description(objectMapper.writeValueAsString(List.of(
                                "Worked on the Career Portal mini project using Java, Spring Boot, Hibernate, MySQL, and React.js.",
                                "Developed RESTful APIs, backend business logic, and database integration using Spring Boot and Hibernate ORM.",
                                "Implemented JWT authentication and role-based authorization for Admin, Recruiter, and Candidate modules.",
                                "Developed features including job posting, job search, application tracking, and role-based dashboards."
                        )))
                        .sortOrder(1)
                        .build(),
                Experience.builder()
                        .companyName("Pawar Technology Services")
                        .position("Software Developer Intern")
                        .employmentType("8 Months Internship")
                        .currentlyWorking(false)
                        .location("Pune, India")
                        .description(objectMapper.writeValueAsString(List.of(
                                "Worked on real-world frontend and backend development tasks using React and Java.",
                                "Built responsive UI components and collaborated on API integration.",
                                "Improved understanding of full-stack workflows, debugging, version control, and deployment.",
                                "Gained hands-on experience in scalable web application development."
                        )))
                        .sortOrder(2)
                        .build()
        ));
    }

    private void seedEducation() {
        educationRepository.saveAll(List.of(
                edu("Java Full Stack Development", "Skillio (TestingShastra), Pune", "Skillio", 2024, 2024, null,
                        "Covered React, Spring Boot, Git, testing, and deployment workflows.", 1),
                edu("React JS Development", "Skillio (TestingShastra), Pune", "Skillio", 2024, 2024, null,
                        "Covered React, Spring Boot, Git, testing, and deployment workflows.", 2),
                edu("Bachelor of Engineering (Computer Engineering)", "North Maharashtra University, Jalgaon", "North Maharashtra University", 2021, 2024, null,
                        "Focused on full-stack development, DSA, and software architecture. Built real-world applications and participated in coding contests.", 3),
                edu("HSC (Science Stream)", "DDSP College, Erandol", "DDSP College", 2019, 2020, null,
                        "Strong foundation in mathematics, logic, and core sciences.", 4)
        ));
    }

    private Education edu(String degree, String college, String university, int start, int end, String cgpa, String desc, int order) {
        return Education.builder().degree(degree).college(college).university(university)
                .startYear(start).endYear(end).cgpa(cgpa).description(desc).sortOrder(order).build();
    }

    private void seedProjects() throws Exception {
        projectRepository.saveAll(List.of(
                project("Portfolio",
                        "🚀 Modern & Responsive Full Stack Developer Portfolio — crafted with ⚛️ React (TSX), 🌱 Spring Boot, 🧠 TypeScript. Showcases projects, skills, experience, and contact — built by Saurabh Prakash Lakhan.",
                        "/projects/portfolio.jpg",
                        List.of("React", "JSX", "Tailwind CSS"),
                        "https://github.com/Saurabh-1435/Portfolio",
                        "https://merry-pie-d73c24.netlify.app/",
                        "/videos/Portfolio.mp4", "React", true, 1),
                project("Shilpkar",
                        "✨ Shilpkar is a modern interior-design platform built with React and Vite 🏡, offering: 🔧 Modular Components for rapid UI assembly 📱 Responsive Layouts optimized for all devices 🎨 Theming Support (light & dark modes) ⚡ Vite-Powered fast development & builds",
                        "/projects/shilpkar.jpg",
                        List.of("React", "JSX", "CSS"),
                        "https://github.com/Saurabh-1435/Shilpkar",
                        "https://shilpkar.netlify.app/",
                        "/videos/shilpkar-1.mp4", "Frontend", true, 2),
                project("Digital-Agency",
                        "Creative digital agency delivering innovative design, web development, and marketing solutions for modern brands.",
                        "/projects/digital-agency-1.jpg",
                        List.of("React", "TSX", "Tailwind Css"),
                        "https://github.com/Saurabh-1435/digital-agency-04",
                        "https://digital-agency-04.netlify.app/",
                        "/videos/agency-1.mp4", "React", false, 3),
                project("Interior Website.",
                        "Elegant interior design website showcasing projects, services, and client testimonials.",
                        "/projects/interior-2.jpg",
                        List.of("React", "TSX", "Tailwind Css"),
                        "https://github.com/Saurabh-1435/furniture-collection--Using-ReactsJs-and-Tailwind-Css.",
                        "https://furnitures-collection.netlify.app/",
                        "/videos/interior-1.mp4", "React", false, 4),
                project("Digital Agency Website.",
                        "Empowering brands with cutting-edge design, powerful development, and strategic marketing for a digital-first world.",
                        "/projects/digital-agency-3.png",
                        List.of("React", "TSX", "Tailwind Css"),
                        "https://github.com/Saurabh-1435/Digital-agency-03",
                        "https://ditital-agency-03.netlify.app/",
                        "/videos/agency-3.mp4", "React", false, 5)
        ));
    }

    private Project project(String title, String desc, String image, List<String> tech,
                            String github, String live, String video, String category, boolean featured, int order) throws Exception {
        return Project.builder()
                .title(title).description(desc).imageUrl(image)
                .technologies(objectMapper.writeValueAsString(tech))
                .githubUrl(github).liveUrl(live).videoUrl(video)
                .category(category).featured(featured).sortOrder(order)
                .build();
    }

    private void seedCertificates() throws Exception {
        certificateRepository.save(Certificate.builder()
                .title("Full Stack Java Development With React.")
                .issuer("Testing Shastrs / PUNE.")
                .issueDate(LocalDate.of(2024, 1, 1))
                .description("Comprehensive full stack development program covering Java, Spring Boot, React, and database technologies.")
                .credentialUrl("https://drive.google.com/file/d/1JVABlS_fHr54rhl2anRIDhBLc0OGrNb2/view?usp=drivesdk")
                .imageUrl("/projects/java-bg1.jpg")
                .skills(objectMapper.writeValueAsString(List.of("Java", "Spring Boot", "React", "MySQL", "REST APIs", "Hibernate", "Html", "CSS", "JDBC", "Spring")))
                .sortOrder(1)
                .build());
    }

    private void seedSocialLinks() {
        socialLinkRepository.saveAll(List.of(
                SocialLink.builder().platform("LinkedIn").url("https://www.linkedin.com/in/saurabh-lakhan-015777327/").icon("Linkedin").sortOrder(1).build(),
                SocialLink.builder().platform("GitHub").url("https://github.com/Saurabh-1435").icon("Github").sortOrder(2).build(),
                SocialLink.builder().platform("Instagram").url("https://www.instagram.com/iam_dev45/").icon("Instagram").sortOrder(3).build()
        ));
    }

    private void seedContactSettings() {
        contactSettingsRepository.save(ContactSettings.builder()
                .email("saurabhlakhan4545@gmail.com")
                .phone("+91 8530587167")
                .location("Pune, Maharashtra, India")
                .githubUrl("https://github.com/Saurabh-1435")
                .linkedinUrl("https://www.linkedin.com/in/saurabh-lakhan-015777327/")
                .instagramUrl("https://www.instagram.com/iam_dev45/")
                .build());
    }

    private void seedSiteSettings() {
        siteSettingsRepository.save(SiteSettings.builder()
                .siteTitle("Saurabh Prakash Lakhan | Full Stack Developer")
                .siteDescription("Portfolio of Saurabh Prakash Lakhan - Full Stack Java Developer specializing in React, Spring Boot, and MySQL.")
                .logoUrl("")
                .faviconUrl("/favicon.ico")
                .footerText("© 2025 Saurabh Lakhan. All rights reserved.")
                .build());
    }
}
