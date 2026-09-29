import { useState } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
  ChevronDown,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import "./App.css";

/* =========================================================
   PROFILE
========================================================= */

const PROFILE = {
  name: "Prince Vishwakarma",
  brand: "websitewithprince",

  role: "Full Stack Developer",
  subtitle: "Web Designer • Developer • Problem Solver",

  intro:
    "I build modern, responsive and scalable websites with clean UI, powerful backend systems and interactive user experiences.",

  email: "princevishwakarmam123@gmail.com",
  phone: "+91 8853260723",
  location: "India",

  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/websitewithprince/",
  },
};

/* =========================================================
   EDUCATION
========================================================= */

const EDUCATION = [
  {
    year: "2023 – 2026",
    title: "Diploma In Computer",
    school: "Government Polytechnic Madhogarh",
    description:
      "Focused on programming, web development, databases and software development.",
  },
  {
    year: "2023",
    title: "12th / Higher Secondary",
    school: "Kashi Nath Inter College",
    description:
      "Completed higher secondary education with a strong academic foundation.",
  },
  {
    year: "2021",
    title: "10th / Secondary",
    school: "Kashi Nath Inter College",
    description:
      "Completed secondary education with a foundation in mathematics, science and computer studies.",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  {
    name: "React.js",
    level: "Advanced",
    icon: "⚛",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: "JS",
  },
  {
    name: "Node.js",
    level: "Advanced",
    icon: "N",
  },
  {
    name: "MongoDB",
    level: "Advanced",
    icon: "M",
  },
  {
    name: "UI / UX",
    level: "Advanced",
    icon: "UI",
  },
  {
    name: "Responsive Design",
    level: "Advanced",
    icon: "R",
  },
  {
    name: "REST APIs",
    level: "Advanced",
    icon: "API",
  },
  {
    name: "3D Web",
    level: "Intermediate",
    icon: "3D",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    number: "01",
    title: "Bhartiya Lokvani Party",
    category: "Full-Stack Website",
    description:
      "A professional political party website with membership system, admin panel, news, events, gallery, video gallery and donation management.",
    technologies: [
      "React",
      "CSS",
      "Node.js",
      "MongoDB",
      "Cloudinary",
    ],
    image: "/projects/project1.png",
    live: "https://bhartiyalokvanipartya.vercel.app/",
    github: "https://github.com/",
  },

  {
    number: "02",
    title: "Prince Care Hube",
    category: "Full-Stack Website",
    description:
      "A full-stack doctor appointment platform that allows patients to explore doctors, view available services and conveniently book appointments through an easy-to-use interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "MongoDB",
    ],
    image: "/projects/project2.png",
    live: "https://prince-care-hube.vercel.app/",
    github: "https://github.com/",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="websitewithprince home"
          >
            <img
              src="/public/prince2.png"
              alt="websitewithprince"
              className="brand-logo"
            />

            <span className="brand-text">
              website
              <span>with</span>
              prince
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}

            <button
              className="nav-contact-btn"
              onClick={() => go("contact")}
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </button>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </header>

      <main>

        {/* ===================================================
            HERO
        =================================================== */}

        <section
          id="home"
          className="hero section"
        >
          <div className="hero-content">

            <div className="availability">
              <span className="availability-dot"></span>
              Available for freelance projects
            </div>

            <p className="hero-brand">
              websitewithprince
            </p>

            <h1>
              Hi, I'm
              <span className="gradient-text">
                Prince Vishwakarma
              </span>
            </h1>

            <h2>
              Full Stack Developer
              <span> & Web Designer</span>
            </h2>

            <p className="hero-description">
              I create modern, responsive and high-performance
              websites with beautiful interfaces, powerful
              backend systems and smooth user experiences.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => go("projects")}
              >
                View My Work
                <ArrowUpRight size={18} />
              </button>

              <button
                className="secondary-button"
                onClick={() => go("contact")}
              >
                Let's Connect
              </button>

            </div>

            <div className="hero-technologies">
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>UI/UX</span>
            </div>

            <button
              className="scroll-down"
              onClick={() => go("about")}
            >
              <span>Scroll to explore</span>
              <ArrowDown size={16} />
            </button>

          </div>

          {/* HERO IMAGE */}

          <div className="hero-visual">

            <div className="hero-glow"></div>

            <div className="hero-ring ring-one"></div>
            <div className="hero-ring ring-two"></div>

            <div className="profile-card">

              <div className="profile-top">
                <span>DEVELOPER</span>
                <span>01 / 06</span>
              </div>

              <div className="profile-image-box">
                <img
                  src="/public/projects/prince3.png"
                  alt="Prince Vishwakarma"
                  className="profile-image"
                />
              </div>

              <div className="profile-bottom">

                <div>
                  <strong>
                    Prince Vishwakarma
                  </strong>

                  <small>
                    websitewithprince
                  </small>
                </div>

                <div className="online-status">
                  <span></span>
                  Available
                </div>

              </div>

            </div>

            <div className="floating-card floating-card-one">
              <Code2 size={18} />
              <div>
                <strong>Clean Code</strong>
                <small>Well structured</small>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <Sparkles size={18} />
              <div>
                <strong>Creative UI</strong>
                <small>Modern experience</small>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading">
            <span className="section-number">
              01 / ABOUT
            </span>

            <h2>
              Building digital experiences
              <span> that matter.</span>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-intro">

              <div className="about-icon">
                <UserRound size={25} />
              </div>

              <h3>
                Hello, I'm Prince.
              </h3>

              <p>
                I'm a Full Stack Developer and Web Designer
                focused on creating modern websites and
                web applications.
              </p>

              <p>
                My approach combines clean design, responsive
                layouts and reliable backend systems to create
                practical digital products.
              </p>

            </div>

            <div className="about-details">

              <div className="detail-box">
                <span>Name</span>
                <strong>
                  Prince Vishwakarma
                </strong>
              </div>

              <div className="detail-box">
                <span>Brand</span>
                <strong>
                  websitewithprince
                </strong>
              </div>

              <div className="detail-box">
                <span>Role</span>
                <strong>
                  Full Stack Developer
                </strong>
              </div>

              <div className="detail-box">
                <span>Location</span>
                <strong>
                  India
                </strong>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section
          id="education"
          className="section"
        >

          <div className="section-heading">
            <span className="section-number">
              02 / EDUCATION
            </span>

            <h2>
              My educational
              <span> journey.</span>
            </h2>
          </div>

          <div className="education-list">

            {EDUCATION.map((item, index) => (
              <div
                className="education-item"
                key={item.title}
              >

                <div className="education-number">
                  0{index + 1}
                </div>

                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>

                <div className="education-content">

                  <span className="education-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.school}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                </div>

                <ChevronDown
                  className="education-arrow"
                  size={20}
                />

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            SKILLS
        =================================================== */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading">
            <span className="section-number">
              03 / SKILLS
            </span>

            <h2>
              Tools I use to
              <span> build things.</span>
            </h2>
          </div>

          <div className="skills-grid">

            {SKILLS.map((skill) => (
              <div
                className="skill-card"
                key={skill.name}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-info">

                  <h3>
                    {skill.name}
                  </h3>

                  <span>
                    {skill.level}
                  </span>

                </div>

                <ArrowUpRight
                  size={18}
                  className="skill-arrow"
                />

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-heading projects-heading">

            <div>
              <span className="section-number">
                04 / PROJECTS
              </span>

              <h2>
                Selected
                <span> work.</span>
              </h2>
            </div>

            <p>
              A collection of websites and applications
              built using modern technologies.
            </p>

          </div>

          <div className="projects-grid">

            {PROJECTS.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-image-box">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-number">
                    {project.number}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-open"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={19} />
                  </a>

                </div>

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.technologies.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                  <div className="project-links">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live"
                    >
                      Live Website
                      <ArrowUpRight size={17} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github"
                    >
                      <FaGithub size={17} />
                      GitHub
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-box">

            <div className="contact-content">

              <span className="section-number">
                05 / CONTACT
              </span>

              <h2>
                Let's build something
                <span> great together.</span>
              </h2>

              <p>
                Have a project idea, website requirement
                or collaboration opportunity? Feel free
                to get in touch.
              </p>

              <div className="contact-details">

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <small>Email</small>
                    <strong>
                      {PROFILE.email}
                    </strong>
                  </div>
                </a>

                <a
                  href={`tel:${PROFILE.phone}`}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>

                  <div>
                    <small>Phone</small>
                    <strong>
                      {PROFILE.phone}
                    </strong>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <small>Location</small>
                    <strong>
                      {PROFILE.location}
                    </strong>
                  </div>
                </div>

              </div>

              <div className="social-links">

                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={PROFILE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

            <div className="contact-side">

              <div className="contact-side-icon">
                <Send size={30} />
              </div>

              <h3>
                Start a conversation
              </h3>

              <p>
                Let's discuss your next website,
                web application or digital idea.
              </p>

              <a
                href={`mailto:${PROFILE.email}`}
                className="contact-email-button"
              >
                Send Me an Email
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-brand">

          <img
            src="/public/prince2.png"
            alt="websitewithprince"
          />

          <div>
            <strong>
              websitewithprince
            </strong>

            <span>
              by Prince Vishwakarma
            </span>
          </div>

        </div>

        <p>
          © {new Date().getFullYear()} websitewithprince.
          All rights reserved.
        </p>

        <button
          className="back-top"
          onClick={() => go("home")}
        >
          Back to top
          <ArrowUpRight size={16} />
        </button>

      </footer>

    </div>
  );
}

export default App;