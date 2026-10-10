import { useState } from "react";
import "./App.css";

const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Python", "Java", "C++"],
  },
  {
    title: "Frontend Development",
    items: ["React.js", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "ASP.NET", "C#"],
  },
  {
    title: "Database",
    items: ["MongoDB Atlas", "MySQL", "SQL Server", "Cloud Firestore"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const projects = [
  {
    number: "01",
    title: "Jewelry E-Commerce Website",
    category: "FULL STACK DEVELOPMENT",
    description:
      "Developed a full-stack jewelry e-commerce platform featuring authentication, wishlist, product management and online payment integration.",
    features: [
      "User Authentication",
      "Wishlist & Product Management",
      "Razorpay Payment Gateway",
      "Payment Verification",
      "Cloud Deployment",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas"],
    deployment: "Vercel · Render",
  },
  {
    number: "02",
    title: "Library Management System",
    category: "MOBILE APPLICATION",
    description:
      "Developed a mobile-based library management application to manage books, user registrations, borrowing, returns and book inventory.",
    features: [
      "Book Management",
      "User Registration",
      "Borrowing & Returns",
      "CRUD Operations",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    deployment: "Firebase Backend",
  },
  {
    number: "03",
    title: "Student Information System",
    category: "WEB APPLICATION",
    description:
      "Built a student information system for managing student records, attendance, academic performance and marksheets.",
    features: [
      "Secure Login",
      "Student Registration",
      "Attendance Tracking",
      "Marks Management",
      "Dynamic Marksheet Generation",
    ],
    stack: ["ASP.NET", "C#", "Microsoft SQL Server"],
    deployment: "Academic Project",
  },
  {
    number: "04",
    title: "Event Management System",
    category: "WEB APPLICATION",
    description:
      "Developed an event management system for managing event details, user registrations, bookings, schedules and ticket-related operations.",
    features: [
      "Event Management",
      "User Registration",
      "Booking Management",
      "CRUD Operations",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    deployment: "Academic Project",
  },
];

const certifications = [
  "Python Basics: Selection and Iteration — Codio",
  "SQL for Data Science — University of California, Davis",
  "Introduction to Java — LearnQuest",
  "Kali Linux — Board Infinity",
  "Gyanotsav 4.0 — Participant",
  "Debate Competition — SEMCOM, 2024",
  "National Level Talent Search Examination — JCI India",
];

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = () => {
    setShowDetails(true);

    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a className="brand" href="#home">
          R<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Connect ↗
        </a>
      </header>

      <main>
        {/* HERO DASHBOARD */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              MCA STUDENT · ASPIRING DEVELOPER
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Rana
              <br />
              <span>Rudra.</span>
            </h1>

            <h2>
              Aspiring <span>Full Stack Developer</span>
            </h2>

            <p className="hero-description">
              MCA student with a strong foundation in programming,
              web development and database management. Interested in
              building practical applications using React.js, Node.js
              and modern web technologies.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={openDetails}>
                Explore My Details <span>↗</span>
              </button>

              <a
                className="btn btn-outline"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View My Resume <span>↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/rdrana462001"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/rudra-rana-5666b220a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:rdrana462001@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="profile-card">
              <div className="card-top">
                <span>DEVELOPER PROFILE</span>
                <span className="card-menu">•••</span>
              </div>

              <div className="avatar">RR</div>

              <h3>Rana Rudra</h3>
              <p className="profile-role">
                Full Stack Development
              </p>

              <div className="profile-divider" />

              <div className="profile-stat">
                <div>
                  <span>Master's Degree</span>
                  <strong>MCA</strong>
                </div>

                <div>
                  <span>CGPA</span>
                  <strong>9.48</strong>
                </div>
              </div>

              <div className="profile-highlight">
                <span className="highlight-icon">{"</>"}</span>

                <div>
                  <strong>Development Focus</strong>
                  <p>Frontend · Backend · Database</p>
                </div>
              </div>
            </div>

            <div className="floating-tag tag-top">
              <span>✦</span> React.js
            </div>

            <div className="floating-tag tag-bottom">
              <span>✦</span> Node.js
            </div>
          </div>
        </section>

        {/* QUICK SUMMARY */}
        <section className="summary-strip">
          <div>
            <span className="summary-number">9.48</span>
            <span className="summary-label">MCA CGPA</span>
          </div>

          <div>
            <span className="summary-number">9.05</span>
            <span className="summary-label">BCA CGPA</span>
          </div>

          <div>
            <span className="summary-number">04</span>
            <span className="summary-label">Featured Projects</span>
          </div>

          <div>
            <span className="summary-number">MERN</span>
            <span className="summary-label">Internship Experience</span>
          </div>
        </section>

        {/* COMPLETE DETAILS */}
        {showDetails && (
          <section className="details-section" id="about">
            <div className="section-heading">
              <p className="section-eyebrow">MORE ABOUT ME</p>
              <h2>Get to Know Me.</h2>
              <p>
                My education, experience and technical journey in one place.
              </p>
            </div>

            <div className="about-grid">
              <article className="glass-card about-main">
                <span className="card-index">01 / ABOUT</span>

                <h3>Building My Journey in Software Development</h3>

                <p>
                  I am an MCA student interested in software development,
                  web technologies and database management. My academic
                  projects and MERN Stack internship have helped me explore
                  frontend development, backend integration and data-driven
                  applications.
                </p>

                <p>
                  My career goal is to grow as a Full Stack Developer,
                  strengthen my technical skills and contribute to
                  real-world software projects.
                </p>
              </article>

              <article className="glass-card">
                <span className="card-index">02 / LOCATION</span>
                <h3>Based in Gujarat</h3>
                <p>Nadiad, Gujarat, India</p>

                <div className="small-divider" />

                <span className="card-index">CAREER INTEREST</span>
                <h3>Full Stack Development</h3>
                <p>Frontend · Backend · Database</p>
              </article>
            </div>

            {/* EDUCATION */}
            <div className="subsection">
              <p className="section-eyebrow">ACADEMIC BACKGROUND</p>
              <h2>Education</h2>

              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot" />

                  <div className="timeline-content">
                    <span className="timeline-date">2025 – Present</span>
                    <h3>Master of Computer Applications (MCA)</h3>
                    <p>ISTAR · CVM University</p>

                    <div className="education-result">
                      CGPA: <strong>9.48</strong>
                    </div>
                  </div>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />

                  <div className="timeline-content">
                    <span className="timeline-date">2022 – 2025</span>
                    <h3>Bachelor of Computer Applications (BCA)</h3>
                    <p>SEMCOM · CVM University</p>

                    <div className="education-result">
                      CGPA: <strong>9.05</strong>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* INTERNSHIP */}
            <div className="subsection">
              <p className="section-eyebrow">PRACTICAL EXPERIENCE</p>
              <h2>Internship Experience</h2>

              <article className="glass-card internship-card">
                <div className="internship-top">
                  <div>
                    <span className="experience-badge">
                      INTERNSHIP
                    </span>

                    <h3>MERN Stack Development Intern</h3>

                    <p className="company-name">
                      Vihil Infotech Private Limited
                    </p>
                  </div>

                  <span className="experience-icon">{"</>"}</span>
                </div>

                <p>
                  Developed responsive web applications using JavaScript
                  and React.js, gaining practical experience in frontend
                  development, backend integration and database management.
                </p>

                <div className="tag-list">
                  {["JavaScript", "React.js", "Frontend", "Backend Integration"].map(
                    (item) => (
                      <span className="tech-tag" key={item}>
                        {item}
                      </span>
                    )
                  )}
                </div>
              </article>
            </div>

            {/* CERTIFICATIONS */}
            <div className="subsection">
              <p className="section-eyebrow">CONTINUOUS LEARNING</p>
              <h2>Certifications & Activities</h2>

              <div className="certification-grid">
                {certifications.map((item, index) => (
                  <article className="certification-card" key={item}>
                    <span className="cert-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* COURSES */}
            <div className="subsection">
              <p className="section-eyebrow">ADDITIONAL KNOWLEDGE</p>
              <h2>Professional Courses</h2>

              <div className="course-grid">
                <article className="glass-card">
                  <span className="course-icon">✦</span>
                  <h3>Advanced Diploma in Multimedia</h3>
                  <p>
                    Completed a 400-hour professional diploma covering
                    Graphic Design, Web Design, 2D/3D Animation, VFX
                    and Video Editing.
                  </p>
                </article>

                <article className="glass-card">
                  <span className="course-icon">✦</span>
                  <h3>Computer Hardware & Assembling</h3>
                  <p>
                    Akshar Institute of Information Technology (AIIT).
                    Training in computer hardware basics, operating
                    system installation and device drivers.
                  </p>
                </article>
              </div>
            </div>

            <button
              className="btn btn-outline details-close"
              onClick={() => {
                setShowDetails(false);
                document.getElementById("home")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Back to Dashboard ↑
            </button>
          </section>
        )}

        {/* SKILLS */}
        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="section-eyebrow">MY TECHNICAL TOOLKIT</p>
            <h2>Skills & Technologies.</h2>
            <p>
              Technologies listed in my academic and professional profile.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-top">
                  <span className="skill-group-number">
                    0{index + 1}
                  </span>

                  <span className="skill-symbol">{"</>"}</span>
                </div>

                <h3>{group.title}</h3>

                <div className="tag-list">
                  {group.items.map((skill) => (
                    <span className="tech-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="content-section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-eyebrow">SELECTED WORK</p>
            <h2>Projects That Define My Journey.</h2>
            <p>
              Academic and development projects using different technologies.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-divider" />

                <p className="project-stack-label">TECHNOLOGIES</p>

                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="deployment-label">
                  {project.deployment}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <p className="section-eyebrow">LET'S CONNECT</p>

          <h2>
            Let's Build Something
            <br />
            <span>Meaningful.</span>
          </h2>

          <p>
            Interested in connecting about software development,
            internship opportunities or collaborative projects?
            Feel free to reach out.
          </p>

          <a
            className="btn btn-primary"
            href="mailto:rdrana462001@gmail.com"
          >
            Get in Touch ↗
          </a>

          <div className="contact-grid">
            <a href="mailto:rdrana462001@gmail.com">
              <span>Email</span>
              <strong>rdrana462001@gmail.com</strong>
            </a>

            <a href="tel:+919173368291">
              <span>Phone</span>
              <strong>+91 91733 68291</strong>
            </a>

            <a
              href="https://github.com/rdrana462001"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>View My Repositories ↗</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/rudra-rana-5666b220a/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Connect With Me ↗</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          R<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Rana Rudra · Built with React.js
        </p>

        <a href="#home">Back to Top ↑</a>
      </footer>
    </div>
  );
}

export default App;