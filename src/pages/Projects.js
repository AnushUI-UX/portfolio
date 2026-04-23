import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Local LLM Fine-Tuning & Optimization',
    date: 'Nov 2025',
    tech: ['PyTorch', 'Llama-3', 'LoRA', 'QLoRA'],
    description: [
      'Fine-tuned a Llama-3 8B model locally using LoRA adapters over 2000+ handcrafted QnA pairs based on Veda and Gita.',
      'Optimized inference latency by 40% through 4-bit quantization (QLoRA), enabling efficient on-device text generation.',
    ],
    githubLink: 'https://github.com/Anush',
  },
  {
    title: 'Dynamic Web Landing Page',
    date: 'Dec 2025',
    tech: ['Vanilla JS', 'Rellax.js', 'CSS3'],
    description: [
      'Utilised complex CSS3 for Backdrop Filter, @keyframes (for Pre-loader) and 3-D transforms.',
      'Used a strategic combination of Vanilla JS (Preloader, Logic) and Rellax.js (Physics) to create a parallax scroll & 3-D tilt effect.',
    ],
    githubLink: 'https://github.com/Anush',
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <p className="projects-label">// What I've Built</p>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A collection of things I've built — from on-device language models to immersive web experiences.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      <div className="projects-cta">
        <p>Want to see more? Check out my GitHub profile.</p>
        <a
          href="https://github.com/Anush"
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-btn"
        >
          github.com/Anush ↗
        </a>
      </div>
    </div>
  );
}

export default Projects;
