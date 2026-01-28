import { projects } from './data/projects';
import './App.css';

function App() {

  return (
    <div className="container">
      <section className="hero">
        <h1>ROUNAK.</h1>
        <p className="tagline">Creative Developer<br />Built wrong. Works right.</p>
        
        <div style={{ marginTop: '4rem' }}>
          <a href="#projects" className="btn">See Work ↓</a>
        </div>
      </section>

      <section id="projects" style={{ padding: '8vh 0' }}>
        <h2 style={{ 
          fontSize: 'clamp(3.5rem, 10vw, 9rem)', 
          marginBottom: '6rem',
          textAlign: 'center'
        }}>
          SELECTED WORK
        </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
        gap: '7rem'
      }}>
        {projects.map((project) => (
          <div  
            key={project.id}
            className="project-card"
          >
            <div style={{
              height: '340px',
              background: `url(${project.image}) center/cover no-repeat`,
              border: '5px solid #000',
              marginBottom: '1.8rem'
            }} />
            <h3 style={{ fontSize: '2.4rem', marginBottom: '0.8rem' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1.3rem', opacity: 0.8, marginBottom: '1rem' }}>
              {project.description}
            </p>
            <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {project.tech.map(t => <span key={t} style={{ marginRight: '0.8rem' }}>{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href={project.liveLink} className="btn" target="_blank">Live Demo</a>
              <a href={project.githubLink} className="btn" target="_blank">Source →</a>
            </div>
          </div>
        ))}
        </div>
      </section>

        <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">ABOUT ME.</h2>
          <div className="about-text">
            <p>
              Hey, I'm Rounak. Self-taught and always learning. I enjoy building stuff that might look a bit off or unconventional at first, perfect isn't really my thing anyway, as long as it works and feels fun to make.
            </p>
            <p>
              My journey started with basic HTML and CSS, and over time, I've dived into JavaScript, React, and various creative coding libraries. I love experimenting with new technologies and pushing the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="contact-headline">
          LET'S TALK
        </h2>
        
        <br />
        <br />

        <div className="contact-links">
          <a 
            href="mailto:kumarguptarounak7@gmail.com" 
            className="btn contact-link"
          >
            hi@rounak.dev →
          </a>

          <a 
            href="https://www.linkedin.com/in/literallyrounak/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn contact-link contact-link--accent"
          >
            LinkedIn →
          </a>

          <a 
            href="https://x.com/literallyrounak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn contact-link"
          >
            X / Twitter →
          </a>

          <a 
            href="https://github.com/literallyrounak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn contact-link"
          >
            GitHub →
          </a>
        </div>

        <p className="contact-note">
          Still learning every day, happy to collaborate while I figure it out.
        </p>
      </section>

      <footer className="status-bar">
        <div className="status-container">
          <div className="status-item availability">
            <span className="dot pulse"></span>
            <span>AVAILABLE</span>
          </div>
          <div className="status-item">
            LOC: DURGAPUR, IN
          </div>
          <div className="status-item">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} IST
          </div>
          <div className="status-item">
            BUILD: STR / INT
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;