import React from 'react';

function About() {
  return (
    <div className="container content-panel panel-detail panel-about">
      <div className="section-header about-section-title">
        <h2>About</h2>
        <p>AI & Full Stack Developer | B.Tech Computer Science Student</p>
      </div>
      <div className="about-layout">
        <div className="about-visual-card">
          <div className="about-portrait">
            <img
              className="about-photo"
              src="/about-photo.jpg"
              alt="Aaryesh Namdeo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                const fallback = event.currentTarget.parentElement?.querySelector('.about-photo-fallback');
                if (fallback) fallback.style.display = 'grid';
              }}
            />
            <div className="about-photo-fallback">
              <div className="about-photo-monogram">AN</div>
              <div className="about-photo-note">Drop your photograph in <span>public/about-photo.jpg</span></div>
            </div>
          </div>
        </div>

        <article className="about-copy-card">
          <h3>AI &amp; Full Stack Developer | B.Tech Computer Science Student</h3>
          <p className="about-intro">
            I am a Computer Science Engineering student at Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore. I enjoy building full-stack web applications, AI-powered solutions, and solving real-world problems through technology. My interests include MERN Stack development, Agentic AI systems, Data Structures &amp; Algorithms, and cloud technologies. I am constantly learning and working on projects that improve my development and problem-solving skills.
          </p>

          <div className="about-fact-grid">
            <div className="fact-row"><strong>Birthday:</strong> —</div>
            <div className="fact-row"><strong>Age:</strong> —</div>
            <div className="fact-row"><strong>Website:</strong> Add Portfolio URL Later</div>
            <div className="fact-row"><strong>Phone:</strong> Add Later</div>
            <div className="fact-row"><strong>City:</strong> Bhopal, Madhya Pradesh, India</div>
            <div className="fact-row"><strong>Degree:</strong> B.Tech (Computer Science Engineering)</div>
            <div className="fact-row"><strong>Email:</strong> Add Email Later</div>
            <div className="fact-row"><strong>Freelance:</strong> Available for Projects &amp; Internships</div>
          </div>

          <p className="about-body">
            Currently pursuing B.Tech in Computer Science Engineering at SVVV Indore, I focus on developing modern web applications using the MERN Stack and exploring the field of Artificial Intelligence. I have worked on projects involving document processing, AI-powered systems, and full-stack development. My goal is to build impactful software solutions while continuously improving my technical skills in software engineering, system design, and emerging technologies.
          </p>

          <div className="about-interests">
            <div className="interests-title">Key Interests</div>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Agentic AI Systems</li>
              <li>MERN Stack Development</li>
              <li>Data Structures &amp; Algorithms</li>
              <li>Cloud Computing</li>
              <li>Open Source Development</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;