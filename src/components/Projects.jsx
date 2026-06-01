import React from 'react';
import '../styles/projects.css';
import vaultnotesImg from '../assets/vaultnotes.png';
import infocampusImg from '../assets/infocampus.png';

const projects = [
  {
    id: 'vaultnotes',
    thumbVariant: 'platform',
    thumbLabel: 'Full Stack',
    showBadge: false,
    thumbText: 'Vault\nNotes',
    title: 'VaultNotes',
    imageUrl: vaultnotesImg,
    subtitle: 'Realtime Collaboration Platform',
    stack: ['React', 'Vite', 'Supabase', 'Zustand', 'Tailwind CSS', 'TipTap'],
    description:
      'A realtime collaboration platform with encrypted public/private Vaults, personal diaries, live chat, and social interactions — featuring optimistic UI, role-based access, and rich text editing.',
    liveUrl: 'https://vaultnotes-seven.vercel.app',
    githubUrl: 'https://github.com/iamaaryesh-n/vaultnotes',
  },
  {
    id: 'focusforge',
    thumbVariant: 'agentic',
    thumbLabel: 'Extension',
    thumbText: 'Focus\nForge',
    title: 'FocusForge',
    subtitle: 'Productivity Chrome Extension',
    stack: ['JavaScript', 'Chrome Extension APIs', 'DOM Monitoring'],
    description:
      'A Chrome extension that filters distracting YouTube content in real time based on user-defined focus intent, using efficient DOM monitoring and lightweight filtering logic.',
    liveUrl: null,
    githubUrl: 'https://github.com/iamaaryesh-n/focusforge',
  },
  {
    id: 'smartcampus',
    thumbVariant: 'platform',
    thumbLabel: 'Full Stack',
    showBadge: false,
    thumbText: 'Smart\nCampus',
    title: 'Smart Campus',
    imageUrl: infocampusImg,
    subtitle: 'Timetable Management System',
    stack: ['Python', 'Flask', 'SQLite', 'pdfplumber', 'HTML/CSS/JS'],
    description:
      'A full-stack timetable system automating PDF timetable parsing via regex extraction into structured DB records, with REST APIs and a responsive frontend for students and faculty.',
    liveUrl: null,
    githubUrl: 'https://github.com/iamaaryesh-n/SmartCampus',
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-thumb ${project.thumbVariant}`}>
        {project.imageUrl ? (
          <img
            className="project-thumb-image"
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
          />
        ) : (
          <span className="project-thumb-text">
            {project.thumbText.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </span>
        )}
        {project.thumbLabel && project.showBadge !== false && (
          <span className="project-thumb-badge">{project.thumbLabel}</span>
        )}
      </div>

      <div className="project-body">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="project-tag">{tech}</span>
          ))}
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-links">
          {project.liveUrl && (
            <a
              className="btn project-link project-link--live"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}
          <a
            className="btn project-link project-link--github"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="container content-panel panel-detail panel-projects">
      <div className="section-header projects-section-title">
        <h2>Projects</h2>
        <p>
          A selection of things I've built — from realtime platforms to browser
          tools and campus systems.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;