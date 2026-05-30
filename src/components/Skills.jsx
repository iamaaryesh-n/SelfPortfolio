import React from 'react';

const skills = [
  { label: 'Full Stack Development', level: 92 },
  { label: 'Python + AI/ML', level: 89 },
  { label: 'System Design Thinking', level: 85 },
  { label: 'DSA + Problem Solving', level: 82 },
  { label: 'UI Implementation', level: 78 },
];

const stack = [
  { category: 'Languages', icon: 'devicon-javascript-plain', label: 'JavaScript' },
  { category: 'Languages', icon: 'devicon-python-plain', label: 'Python' },
  { category: 'Frameworks', icon: 'devicon-react-original', label: 'React' },
  { category: 'Frameworks', icon: 'devicon-nodejs-plain', label: 'Node.js' },
  { category: 'Tools', icon: 'devicon-git-plain', label: 'Git' },
  { category: 'Tools', icon: 'devicon-vscode-plain', label: 'VS Code' },
  { category: 'AI/ML', icon: 'devicon-tensorflow-original', label: 'TensorFlow' },
  { category: 'AI/ML', icon: 'devicon-amazonwebservices-original', label: 'Cloud Systems' },
];

function Skills() {
  return (
    <div className="container content-panel panel-detail panel-skills">
      <div className="section-header">
        <div className="eyebrow">Skills</div>
        <h2>Selected stack across engineering, product, and AI.</h2>
      </div>

      <div className="icon-grid active-grid">
        {stack.map((item) => (
          <div className="icon-card" key={item.label}>
            <div className="icon-category">{item.category}</div>
            <i className={item.icon} />
            <div className="icon-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;