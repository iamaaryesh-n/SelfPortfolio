import React from 'react';

function About() {
  return (
    <div className="container content-panel panel-detail panel-about">
      <div className="section-header about-section-title">
        <h2>About</h2>
        <p>Computer Science Engineering Student | Full Stack Developer</p>
      </div>
      <section className="about-panel">
        <div className="about-main-card">
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
            <h3>Computer Science Engineering Student | Full Stack Developer</h3>
            <p className="about-intro">
              I am a third-year Computer Science Engineering student at Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore, with a strong interest in full-stack web development and modern software engineering. I enjoy building scalable, user-focused web applications and solving real-world problems through technology.
            </p>

            <p className="about-body">
              My primary focus is on MERN Stack development, where I continuously improve my skills by working on practical projects and exploring modern development practices. Alongside web development, I am also learning Artificial Intelligence and Machine Learning to understand how intelligent systems can enhance software solutions.
            </p>

            <p className="about-body">
              I am passionate about continuous learning, problem solving, and building impactful digital experiences. My goal is to grow as a software developer, strengthen my engineering fundamentals, and contribute to meaningful projects while collaborating with talented teams.
            </p>
          </article>
        </div>

        <div className="about-details-card">
          <div className="about-fact-grid">
            <div className="fact-row"><strong>Birthday:</strong> 06 February 2004</div>
            <div className="fact-row"><strong>Age:</strong> 22</div>
            <div className="fact-row"><strong>Phone:</strong> +91 7248979986</div>
            <div className="fact-row"><strong>City:</strong> Indore, Madhya Pradesh, India</div>
            <div className="fact-row"><strong>Degree:</strong> B.Tech (Computer Science Engineering)</div>
            <div className="fact-row"><strong>Availability:</strong> Open to Internships &amp; Collaborations</div>
            <div className="fact-row"><strong>Email:</strong> <a href="mailto:aaryesh364@gmail.com">aaryesh364@gmail.com</a></div>
          </div>

          <div className="about-interests">
            <div className="interests-title">Key Interests</div>
            <ul>
              <li>Artificial Intelligence</li>
              <li>MERN Stack Development</li>
              <li>Data Structures &amp; Algorithms</li>
              <li>Cloud Computing</li>
              <li>Open Source Development</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;