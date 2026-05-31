import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    featured: true,
  },
  {
    title: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
    featured: true,
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MongoDB', 'SQLite', 'Database Design'],
  },
  {
    title: 'Programming',
    icon: 'programming',
    items: ['JavaScript', 'Python', 'Data Structures & Algorithms'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Exploring',
    icon: 'exploring',
    items: ['Artificial Intelligence', 'Machine Learning', 'Agentic AI Systems', 'Cloud Technologies'],
    muted: true,
  },
];

function SkillIcon({ type }) {
  if (type === 'frontend') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="M8 9.2 6.2 12l1.8 2.8" />
        <path d="m16 9.2 1.8 2.8-1.8 2.8" />
      </svg>
    );
  }

  if (type === 'backend') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="5" width="15" height="4" rx="1.5" />
        <rect x="4.5" y="10" width="15" height="4" rx="1.5" />
        <rect x="4.5" y="15" width="15" height="4" rx="1.5" />
      </svg>
    );
  }

  if (type === 'database') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" />
        <path d="M5.5 6.5v10c0 1.5 3 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-10" />
        <path d="M5.5 11.5c0 1.5 3 2.8 6.5 2.8s6.5-1.3 6.5-2.8" />
      </svg>
    );
  }

  if (type === 'programming') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7 3.8 12 8 17" />
        <path d="m16 7 4.2 5L16 17" />
        <path d="M13.2 6.5 10.8 17.5" />
      </svg>
    );
  }

  if (type === 'tools') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L5 16l3 3 4.1-4.1a4 4 0 0 0 5.6-5.6l-2 2-2.4-.6-.6-2.4 2-2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5.5h10l2 3.8-7 9.2-7-9.2z" />
      <path d="M7 9.3h10" />
      <path d="M12 6v11" />
    </svg>
  );
}

function Skills() {
  return (
    <div className="container content-panel panel-detail panel-skills">
      <div className="section-header skills-section-header">
        <div className="eyebrow">Skills</div>
        <h2>Technologies I Use to Build Modern Web Applications</h2>
        <p>Full Stack Web Development is my primary focus. I’m also currently exploring AI and ML to broaden how I approach software problems.</p>
      </div>

      <div className="skills-grid-cards">
        {skillCategories.map((category) => (
          <article
            className={`skill-category-card ${category.featured ? 'is-featured' : ''} ${category.muted ? 'is-muted' : ''}`}
            key={category.title}
          >
            <div className="skill-category-head">
              <div className="skill-category-icon">
                <SkillIcon type={category.icon} />
              </div>
              <div>
                <h3>{category.title}</h3>
              </div>
            </div>

            <ul className="skill-points">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skills;