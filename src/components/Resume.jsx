import React from 'react';
import '../styles/Resume.css';
import resumePdf from '../assets/Aaryesh_Namdeo_Resume.pdf';

function Resume() {
  return (
    <div className="container content-panel panel-detail panel-resume">
      <div className="section-header section-header-compact resume-section-title">
        <div className="eyebrow">Resume</div>
        <h2>Education, projects, skills, and certifications.</h2>
        <p>B.Tech Computer Science · MERN Stack · Machine Learning</p>
      </div>

      <div className="resume-container">

        {/* ── SUMMARY ── */}
        <div className="resume-summary">
          <div className="resume-summary-avatar">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
          </div>
          <div className="resume-summary-body">
            <h3>Aaryesh Namdeo</h3>
            <span className="resume-summary-role">
              Computer Science & Engineering Student · MERN Stack · Machine Learning
            </span>
            <p>
              A self-driven Computer Science student with hands-on experience building full-stack web
              applications using the MERN stack and real-time collaboration systems. Actively exploring
              Machine Learning and data-driven software. Seeking a remote or part-time internship in web
              development or ML where I can contribute meaningfully while continuing my B.Tech.
            </p>
            <div className="resume-summary-meta">
              <div className="resume-meta-item">
                <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>
                <span>Indore, Madhya Pradesh</span>
              </div>
              <div className="resume-meta-item">
                <svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>
                <span>aaryesh364@gmail.com</span>
              </div>
              <div className="resume-meta-item">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.8.29 1.56.5 2.31a2 2 0 0 1-.45 1.94L8.9 9.9a16 16 0 0 0 6 6l1.92-1.92a2 2 0 0 1 1.94-.45c.75.21 1.51.38 2.31.5A2 2 0 0 1 22 16.92z" /></svg>
                <span>+91 72489 79986</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── TWO COLUMNS: Education + Projects ── */}
        <div className="resume-grid">

          {/* EDUCATION */}
          <div>
            <h3 className="resume-col-title">Education</h3>
            <div className="resume-timeline">

              <div className="tl-item">
                <div className="tl-card">
                  <div className="tl-badge">
                    <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    2022 — 2027 (Expected)
                  </div>
                  <h4>B.Tech — Computer Science & Engineering</h4>
                  <span className="tl-institution">
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore
                  </span>
                  <p>
                    3rd Year · CGPA: 7.8 / 10.0<br />
                    Focused on full-stack development, machine learning, data structures & algorithms,
                    DBMS, operating systems, and software engineering.
                  </p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-card">
                  <div className="tl-badge">
                    <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    2022
                  </div>
                  <h4>Class XII — Science</h4>
                  <span className="tl-institution">
                    Viva College of Arts, Commerce and Science, Mumbai
                  </span>
                  <p>Score: 56.6%</p>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-card">
                  <div className="tl-badge">
                    <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    2020
                  </div>
                  <h4>Class X</h4>
                  <span className="tl-institution">St. Mary High School, Mumbai</span>
                  <p>Score: 84.6%</p>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="resume-col-title">Projects</h3>
            <div className="resume-timeline">

              <div className="tl-item">
                <div className="tl-card">
                  <div className="tl-badge">
                    <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    React · Vite · Supabase · Zustand · Tailwind
                  </div>
                  <h4>VaultNotes — Realtime Collaboration Platform</h4>
                  <span className="tl-institution">vaultnotes-seven.vercel.app</span>
                  <ul>
                    <li>Built encrypted public/private Vaults with realtime messaging, live chat, and social interactions using Supabase Realtime.</li>
                    <li>Implemented optimistic UI updates, role-based workspace access, and stabilized realtime sync across feeds and chats.</li>
                    <li>Designed rich text editing via TipTap with shared posts, reactions, comments, and Vault discovery.</li>
                  </ul>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-card">
                  <div className="tl-badge">
                    <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    JavaScript · Chrome Extension APIs · DOM
                  </div>
                  <h4>FocusForge — Productivity Chrome Extension</h4>
                  <span className="tl-institution">github.com/iamaaryesh-n/focusforge</span>
                  <ul>
                    <li>Filters distracting YouTube content based on user-defined focus intent in real time.</li>
                    <li>Optimized detection across videos, playlists, and Shorts using efficient DOM monitoring and lightweight filtering logic.</li>
                  </ul>
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-card">
                  <div className="tl-badge">
                    <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    Python · Flask · SQLite · pdfplumber
                  </div>
                  <h4>Smart Campus Timetable Management System</h4>
                  <span className="tl-institution">github.com/iamaaryesh-n/SmartCampus</span>
                  <ul>
                    <li>Automated timetable management for students and faculty with PDF parsing using pdfplumber and regex-based extraction.</li>
                    <li>Built REST APIs in Flask with SQLite storage and a responsive frontend interface.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── TECHNICAL SKILLS ── */}
        <div className="resume-skills">
          <h3 className="resume-col-title">Technical Skills</h3>
          <div className="skills-grid">

            <div className="skill-card">
              <h4>Languages</h4>
              <div className="skill-tags">
                {['C++', 'Python', 'JavaScript', 'HTML5', 'CSS3'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h4>Frontend</h4>
              <div className="skill-tags">
                {['React.js', 'Vite', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'TipTap Editor'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h4>Backend</h4>
              <div className="skill-tags">
                {['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Supabase'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h4>Databases</h4>
              <div className="skill-tags">
                {['MongoDB', 'MySQL', 'SQLite', 'PostgreSQL (Supabase)'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h4>ML & Data</h4>
              <div className="skill-tags">
                {['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h4>Tools & CS Concepts</h4>
              <div className="skill-tags">
                {['Git', 'GitHub', 'Postman', 'Linux', 'DSA', 'OOP', 'DBMS', 'OS'].map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── CERTIFICATIONS ── */}
        <div className="resume-certs">
          <h3 className="resume-col-title">Certifications</h3>
          <div className="cert-list">
            {[
              { name: 'SQL — Basic',        issuer: 'HackerRank · Verified' },
              { name: 'SQL — Intermediate', issuer: 'HackerRank · Verified' },
              { name: 'SQL — Advanced',     issuer: 'HackerRank · Verified' },
            ].map(cert => (
              <div className="cert-item" key={cert.name}>
                <div className="cert-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DOWNLOAD ── */}
        <div className="resume-download-wrap">
          <a
            className="resume-download-btn"
            href={resumePdf}
            download="Aaryesh_Namdeo_Resume.pdf"
          >
            <svg viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Full Resume
          </a>
        </div>

      </div>
    </div>
  );
}

export default Resume;
