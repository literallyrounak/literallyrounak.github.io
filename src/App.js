import { projects } from './data/projects';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="container">
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: -60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          ROUNAK.
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          Creative Developer<br />Built wrong. Works right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: '4rem' }}
        >
          <a href="#projects" className="btn">See Work ↓</a>
        </motion.div>
      </section>

      <section id="projects" style={{ padding: '8vh 0' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            marginBottom: '6rem',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          SELECTED WORK
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
          gap: '7rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 80, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.04,
                rotate: 1.5,
                boxShadow: "16px 16px 0 #fff",
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{
                height: '340px',
                background: `url(${project.image}) center/cover no-repeat`,
                border: '5px solid #fff',
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
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } }
        }}
      >
        <motion.h2
          className="about-title"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          ABOUT ME.
        </motion.h2>

        <div className="about-text">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            Hey, I'm Rounak. Self-taught and always learning. I enjoy building stuff that might look a bit off or unconventional at first, perfect isn't really my thing anyway, as long as it works and feels fun to make.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            My journey started with basic HTML and CSS, and over time, I've dived into JavaScript, React, and various creative coding libraries. I love experimenting with new technologies and pushing the boundaries of what's possible on the web.
          </motion.p>
        </div>
      </motion.section>

      <section className="contact-section">
        <motion.h2
          className="contact-headline"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          LET'S TALK
        </motion.h2>

        <br />
        <br />

        <motion.div
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.a
            href="mailto:kumarguptarounak7@gmail.com"
            className="btn contact-link"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            hi@rounak.dev →
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/literallyrounak/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-link contact-link--accent"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            LinkedIn →
          </motion.a>

          <motion.a
            href="https://x.com/literallyrounak"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-link"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            X / Twitter →
          </motion.a>

          <motion.a
            href="https://github.com/literallyrounak"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-link"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            GitHub →
          </motion.a>
        </motion.div>

        <p className="contact-note">
          Still learning every day, happy to collaborate while I figure it out.
        </p>
      </section>

      <motion.footer
        className="status-bar"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="status-container">
          <div className="status-item availability">
            {/* <span className="dot pulse"></span> */}
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
      </motion.footer>
    </div>
  );
}

export default App;