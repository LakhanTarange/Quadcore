import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern, responsive and high-performance websites built for your digital growth."
  },
  {
    number: "02",
    title: "App Development",
    text: "Powerful mobile and web applications designed around your business needs."
  },
  {
    number: "03",
    title: "UI / UX Design",
    text: "Clean, intuitive and engaging experiences that connect your brand with users."
  },
  {
    number: "04",
    title: "Digital Solutions",
    text: "Technology solutions that help businesses work smarter and grow faster."
  }
];

const projects = [
  {
    title: "Digital Experience",
    category: "Web Development"
  },
  {
    title: "Business Platform",
    category: "Application Development"
  },
  {
    title: "Creative Interface",
    category: "UI / UX Design"
  }
];

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <main>
      <header className="navbar">
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>
            QUAD<span>CORE</span>
          </button>

          <nav>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <button
            className="nav-contact"
            onClick={() => scrollTo("contact")}
          >
            Let's Talk
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <span></span>
            DIGITAL SOLUTIONS
          </div>

          <h1>
            Build Your
            <br />
            <strong>Digital Future.</strong>
          </h1>

          <p>
            We create powerful digital experiences, modern websites and
            intelligent technology solutions that help businesses move
            forward.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollTo("services")}
            >
              Explore Services <span>↗</span>
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollTo("portfolio")}
            >
              View Our Work
            </button>
          </div>
        </div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>
      </section>

      <section id="about" className="about section">
        <div className="section-label">01 — ABOUT US</div>

        <div className="about-grid">
          <div>
            <h2>
              We turn ideas into
              <br />
              <span>digital reality.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Quadcore is a digital solutions company focused on creating
              meaningful technology experiences. We combine design,
              development and strategy to build products that make an impact.
            </p>

            <p>
              From websites and applications to complete digital solutions,
              our goal is simple — create technology that works beautifully.
            </p>

            <button
              className="text-btn"
              onClick={() => scrollTo("contact")}
            >
              Work with us <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="services section">
        <div className="section-label">02 — WHAT WE DO</div>

        <div className="section-heading">
          <h2>
            Services built for
            <br />
            <span>the future.</span>
          </h2>

          <p>
            Everything you need to transform your idea into a successful
            digital product.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>

              <div className="service-icon">↗</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="card-line"></div>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="portfolio section">
        <div className="section-label">03 — SELECTED WORK</div>

        <div className="section-heading portfolio-heading">
          <h2>
            Ideas we've
            <br />
            <span>brought to life.</span>
          </h2>

          <p>
            A glimpse of the digital experiences we create for ambitious
            brands and businesses.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-image project-${index + 1}`}>
                <div className="project-overlay">
                  <span>VIEW PROJECT ↗</span>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="advantage section">
        <div className="section-label">04 — WHY QUADCORE</div>

        <div className="advantage-grid">
          <h2>
            Technology.
            <br />
            Design.
            <br />
            <span>Possibility.</span>
          </h2>

          <div className="advantage-list">
            <div>
              <strong>01</strong>
              <span>Creative thinking</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Modern technology</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Business focused</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Long-term partnership</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-box">
          <div className="section-label">05 — GET IN TOUCH</div>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <p>
            Have an idea, a project or simply want to talk technology?
            We'd love to hear from you.
          </p>
          <p className="contact-location">
            Pune, Maharashtra, India
          </p>

          <a className="contact-button" href="mailto:hello@quadcore.com">
            Start a conversation <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <button className="footer-logo" onClick={() => scrollTo("home")}>
              QUAD<span>CORE</span>
            </button>

            <p>Build Your Digital Future.</p>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Quadcore. All rights reserved.</span>
          <span>Digital solutions for tomorrow.</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
