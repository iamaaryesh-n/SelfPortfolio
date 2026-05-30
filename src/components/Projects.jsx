import React from 'react';

const projects = [
  {
    title: 'Startup Shopping Platform',
    tag: 'E-commerce',
    caption: 'A startup-first shopping system.',
    description: 'A clean commerce experience focused on product discovery, structured browsing, and conversion-minded UI patterns.',
    kind: 'platform',
    linkLabel: 'View Project →',
  },
  {
    title: 'Agentic AI System',
    tag: 'Grok + Claude',
    caption: 'Multi-model automation with intent.',
    description: 'An agentic AI workflow built to orchestrate tasks, synthesize outputs, and support practical decision-making.',
    kind: 'agentic',
    linkLabel: 'View Project →',
  },
  {
    title: 'Coming Soon',
    tag: 'Next Build',
    caption: 'A reserved space for the next refined system.',
    description: 'A future project slot for the next interface, platform, or AI tool built with the same quality bar.',
    kind: 'soon',
    linkLabel: 'Discuss It →',
  },
];

function Projects({ openSection }) {
  return (
    <div className="container content-panel panel-detail panel-projects">
      <div className="section-header">
        <div className="eyebrow">Projects</div>
        <h2>Work shaped to feel deliberate, useful, and production-ready.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-thumb ${project.kind}`}>
              <div className="project-thumb-text">{project.caption}</div>
              <div className="project-thumb-badge">{project.tag}</div>
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <button className="project-link" type="button" onClick={() => openSection('contact')}>
                {project.linkLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;