-- Portfolio CMS Seed Data
-- Run AFTER schema.sql
-- NOTE: Admin password must be BCrypt hashed. Do NOT insert plain text passwords here.
-- Use the Spring Boot DataInitializer with ADMIN_EMAIL and ADMIN_PASSWORD env vars instead.

USE portfolio_db;

-- Profile
INSERT INTO profiles (full_name, professional_title, tagline, profile_image_url, resume_url, email, phone, location, github_url, linkedin_url, instagram_url, website_url)
VALUES (
    'Saurabh Prakash Lakhan',
    'Full Stack Developer',
    'A passionate developer who loves building dynamic, scalable, and responsive web and mobile applications. Specialized in full-stack solutions using modern technologies.',
    '/saurabh-bg-.jpg',
    '/resume.pdf',
    'saurabhlakhan4545@gmail.com',
    '+91 8530587167',
    'Pune, Maharashtra, India',
    'https://github.com/Saurabh-1435',
    'https://www.linkedin.com/in/saurabh-lakhan-015777327/',
    'https://www.instagram.com/iam_dev45/',
    'https://merry-pie-d73c24.netlify.app/'
);

-- About (JSON description stores aboutMe + whatDrivesMe)
INSERT INTO about (heading, description, years_of_experience)
VALUES (
    'About Me',
    '{"aboutMe":"I am a Java Full Stack Developer with 1+ year of combined professional and internship experience, specializing in Java, Spring Boot, React.js, Hibernate, MySQL, and RESTful APIs. I enjoy building responsive, scalable, and user-friendly web applications while working across both frontend and backend development.","whatDrivesMe":"The intersection of creativity and technology motivates me. I constantly explore new frameworks, design patterns, and architectural techniques to stay ahead in modern development and deliver meaningful, efficient, and visually appealing solutions."}',
    1
);

-- Skills
INSERT INTO skills (name, category, icon, proficiency, sort_order) VALUES
('React', 'Frontend', 'FaReact', 85, 1),
('HTML', 'Frontend', 'FaHtml5', 90, 2),
('Tailwind CSS', 'Frontend', 'SiTailwindcss', 85, 3),
('CSS', 'Frontend', 'FaCss3Alt', 85, 4),
('JavaScript', 'Frontend', 'FaJs', 85, 5),
('Bootstrap', 'Frontend', 'FaBootstrap', 80, 6),
('Java', 'Backend', 'FaJava', 90, 7),
('Spring Boot', 'Backend', 'SiSpringboot', 85, 8),
('Hibernate', 'Backend', 'SiHibernate', 80, 9),
('JDBC', 'Backend', 'TbDatabase', 75, 10),
('Firebase', 'Database', 'SiFirebase', 70, 11),
('MySQL', 'Database', 'SiMysql', 85, 12),
('MongoDB', 'Database', 'SiMongodb', 70, 13),
('Git', 'Tools', 'FaGitAlt', 85, 14),
('GitHub', 'Tools', 'FaGithub', 85, 15),
('STS', 'Tools', 'SiSpring', 80, 16),
('Eclipse', 'Tools', 'SiEclipseide', 75, 17),
('Postman', 'Tools', 'SiPostman', 85, 18),
('Problem Solving', 'Other', 'FaBrain', 90, 19),
('Team Collaboration', 'Other', 'FaUsers', 85, 20),
('Communication', 'Other', 'FaComments', 85, 21),
('Time Management', 'Other', 'FaRegClock', 80, 22),
('Adaptability', 'Other', 'FaSync', 85, 23),
('Creativity', 'Other', 'FaLightbulb', 85, 24);

-- Experiences
INSERT INTO experiences (company_name, position, employment_type, start_date, end_date, currently_working, location, description, sort_order) VALUES
('Accure Softech Pvt. Ltd.', 'Software Developer', 'Full-time', '2025-10-01', '2026-07-01', FALSE, 'Pune, India',
 '["Worked on the Career Portal mini project using Java, Spring Boot, Hibernate, MySQL, and React.js.","Developed RESTful APIs, backend business logic, and database integration using Spring Boot and Hibernate ORM.","Implemented JWT authentication and role-based authorization for Admin, Recruiter, and Candidate modules.","Developed features including job posting, job search, application tracking, and role-based dashboards."]', 1),
('Pawar Technology Services', 'Software Developer Intern', '8 Months Internship', NULL, NULL, FALSE, 'Pune, India',
 '["Worked on real-world frontend and backend development tasks using React and Java.","Built responsive UI components and collaborated on API integration.","Improved understanding of full-stack workflows, debugging, version control, and deployment.","Gained hands-on experience in scalable web application development."]', 2);

-- Education
INSERT INTO education (degree, college, university, start_year, end_year, description, sort_order) VALUES
('Java Full Stack Development', 'Skillio (TestingShastra), Pune', 'Skillio', 2024, 2024, 'Covered React, Spring Boot, Git, testing, and deployment workflows.', 1),
('React JS Development', 'Skillio (TestingShastra), Pune', 'Skillio', 2024, 2024, 'Covered React, Spring Boot, Git, testing, and deployment workflows.', 2),
('Bachelor of Engineering (Computer Engineering)', 'North Maharashtra University, Jalgaon', 'North Maharashtra University', 2021, 2024, 'Focused on full-stack development, DSA, and software architecture. Built real-world applications and participated in coding contests.', 3),
('HSC (Science Stream)', 'DDSP College, Erandol', 'DDSP College', 2019, 2020, 'Strong foundation in mathematics, logic, and core sciences.', 4);

-- Projects
INSERT INTO projects (title, description, image_url, technologies, github_url, live_url, video_url, category, featured, sort_order) VALUES
('Portfolio', '🚀 Modern & Responsive Full Stack Developer Portfolio — crafted with ⚛️ React (TSX), 🌱 Spring Boot, 🧠 TypeScript. Showcases projects, skills, experience, and contact — built by Saurabh Prakash Lakhan.', '/projects/portfolio.jpg', '["React","JSX","Tailwind CSS"]', 'https://github.com/Saurabh-1435/Portfolio', 'https://merry-pie-d73c24.netlify.app/', '/videos/Portfolio.mp4', 'React', TRUE, 1),
('Shilpkar', '✨ Shilpkar is a modern interior-design platform built with React and Vite 🏡.', '/projects/shilpkar.jpg', '["React","JSX","CSS"]', 'https://github.com/Saurabh-1435/Shilpkar', 'https://shilpkar.netlify.app/', '/videos/shilpkar-1.mp4', 'Frontend', TRUE, 2),
('Digital-Agency', 'Creative digital agency delivering innovative design, web development, and marketing solutions for modern brands.', '/projects/digital-agency-1.jpg', '["React","TSX","Tailwind Css"]', 'https://github.com/Saurabh-1435/digital-agency-04', 'https://digital-agency-04.netlify.app/', '/videos/agency-1.mp4', 'React', FALSE, 3),
('Interior Website.', 'Elegant interior design website showcasing projects, services, and client testimonials.', '/projects/interior-2.jpg', '["React","TSX","Tailwind Css"]', 'https://github.com/Saurabh-1435/furniture-collection--Using-ReactsJs-and-Tailwind-Css.', 'https://furnitures-collection.netlify.app/', '/videos/interior-1.mp4', 'React', FALSE, 4),
('Digital Agency Website.', 'Empowering brands with cutting-edge design, powerful development, and strategic marketing for a digital-first world.', '/projects/digital-agency-3.png', '["React","TSX","Tailwind Css"]', 'https://github.com/Saurabh-1435/Digital-agency-03', 'https://ditital-agency-03.netlify.app/', '/videos/agency-3.mp4', 'React', FALSE, 5);

-- Certificates
INSERT INTO certificates (title, issuer, issue_date, credential_url, image_url, description, skills, sort_order) VALUES
('Full Stack Java Development With React.', 'Testing Shastrs / PUNE.', '2024-01-01', 'https://drive.google.com/file/d/1JVABlS_fHr54rhl2anRIDhBLc0OGrNb2/view?usp=drivesdk', '/projects/java-bg1.jpg',
 'Comprehensive full stack development program covering Java, Spring Boot, React, and database technologies.',
 '["Java","Spring Boot","React","MySQL","REST APIs","Hibernate","Html","CSS","JDBC","Spring"]', 1);

-- Social Links
INSERT INTO social_links (platform, url, icon, sort_order) VALUES
('LinkedIn', 'https://www.linkedin.com/in/saurabh-lakhan-015777327/', 'Linkedin', 1),
('GitHub', 'https://github.com/Saurabh-1435', 'Github', 2),
('Instagram', 'https://www.instagram.com/iam_dev45/', 'Instagram', 3);

-- Contact Settings
INSERT INTO contact_settings (email, phone, location, github_url, linkedin_url, instagram_url) VALUES
('saurabhlakhan4545@gmail.com', '+91 8530587167', 'Pune, Maharashtra, India', 'https://github.com/Saurabh-1435', 'https://www.linkedin.com/in/saurabh-lakhan-015777327/', 'https://www.instagram.com/iam_dev45/');

-- Site Settings
INSERT INTO site_settings (site_title, site_description, favicon_url, footer_text) VALUES
('Saurabh Prakash Lakhan | Full Stack Developer', 'Portfolio of Saurabh Prakash Lakhan - Full Stack Java Developer specializing in React, Spring Boot, and MySQL.', '/favicon.ico', '© 2025 Saurabh Lakhan. All rights reserved.');

-- Admin: Create via Spring Boot env vars ADMIN_EMAIL and ADMIN_PASSWORD on first startup
-- Example: admin@example.com with your own secure password (BCrypt encoded automatically)
