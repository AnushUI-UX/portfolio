import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';

const skills = {
  Languages: ['C++', 'C', 'Java', 'SQL', 'HTML', 'JavaScript', 'Python'],
  'Developer Tools': ['Git/GitHub', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter', 'VS Code'],
  'AI & ML': ['NLP', 'Computer Vision', 'Reinforcement Learning', 'Generative AI', 'LLMs', 'RAG', 'Fine-tuning'],
  Math: ['Linear Algebra', 'Probability', 'Statistics', 'Optimization', 'Calculus'],
  'Core CS': ['Data Structures & Algorithms', 'OOP (Java)', 'DBMS'],
};

const education = [
  {
    institution: 'Mahindra University',
    degree: 'B.Tech in Artificial Intelligence',
    period: 'Aug 2023 – Present',
    details: ['GPA: 7.82', 'SGPA: 8.54'],
  },
  {
    institution: 'FIITJEE Junior College, Hyderabad',
    degree: 'Intermediate (TSBIE)',
    period: '2022',
    details: ['Boards: 94%'],
  },
  {
    institution: 'The Newtown School, Kolkata',
    degree: 'Secondary (CBSE)',
    period: '2020',
    details: ['Boards: 95%'],
  },
];

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">// AI & ML Engineer</p>
            <h1 className="hero-name">
              Anush<br />
              <span className="hero-surname">Mohanty</span><br />
              <span className="hero-roll">SE23UARI011</span>
            </h1>
            <p className="hero-bio">
              Building intelligent systems at the intersection of language, vision, and reasoning.
              Currently pursuing B.Tech in AI at Mahindra University, Hyderabad.
            </p>
            <div className="hero-actions">
              <NavLink to="/projects" className="btn-primary">View Projects →</NavLink>
              <a
                href="mailto:se23uari011@mahindrauniversity.edu.in"
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-placeholder">
              <span>AM</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">scroll ↓</div>
      </section>

      {/* About */}
      <section className="section about-section">
        <h2 className="section-title"><span>01</span> About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a third-year AI student passionate about making large language models
              run efficiently and beautifully on everyday hardware. My work spans from
              fine-tuning Llama models locally to crafting immersive web experiences with
              parallax and 3D transforms.
            </p>
            <p>
              Outside academics, I serve as a Sports Editor (and now Student Mentor) at
              <em> The ECHO</em>, Mahindra University's campus newspaper — where I combine
              storytelling with event logistics.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">Anush Mohanty</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+91-93373-78771</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">College Email</span>
              <span className="detail-value">se23uari011@mahindrauniversity.edu.in</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section interests-section">
        <h2 className="section-title"><span>02</span> Research Interests</h2>
        <div className="interests-grid">
          {[
            { icon: '🧠', title: 'Large Language Models', desc: 'Fine-tuning, alignment, RAG pipelines, and efficient inference with quantization.' },
            { icon: '👁️', title: 'Computer Vision', desc: 'Object detection, segmentation, and multimodal vision-language models.' },
            { icon: '🎮', title: 'Reinforcement Learning', desc: 'Policy optimization, reward modelling, and RL from human feedback (RLHF).' },
            { icon: '⚙️', title: 'On-Device AI', desc: 'Model compression, quantization (QLoRA), and edge deployment strategies.' },
          ].map((item) => (
            <div className="interest-card" key={item.title}>
              <span className="interest-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section">
        <h2 className="section-title"><span>03</span> Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section edu-section">
        <h2 className="section-title"><span>04</span> Education</h2>
        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-dot" />
              <div className="edu-content">
                <div className="edu-header">
                  <h3>{edu.institution}</h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-details">
                  {edu.details.map((d) => (
                    <span className="edu-badge" key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
