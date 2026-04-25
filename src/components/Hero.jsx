const techLogos = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const Hero = () => {
  return (
    <section className="hero-dark section-wrap" id="home">
      <div className="hero-text">
        <p className="eyebrow">Software Developer</p>
        <h1 className="hero-heading">
          Hi, I am <span className="accent">Tanya Suryavanshi</span>
        </h1>
        <p className="hero-subtitle">
          Dedicated developer with a strong foundation in software engineering,
          web development, and enterprise IT operations across cloud and
          infrastructure environments.
        </p>
        <div className="cta-buttons">
          <a
            href="https://drive.google.com/file/d/1Dqi89zhNzTFwu00B5vdgwQMvGIGBWojw/view?usp=drive_link"
            className="btn outline"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a href="#projects" className="btn filled">
            View Projects
          </a>
        </div>
      </div>
      <div className="hero-img">
        <div className="tech-collage-single" aria-label="Technology stack collage">
          <div className="collage-core">Tech Stack</div>
          {techLogos.map((logo) => (
            <div className="tech-badge" key={logo.name} title={logo.name}>
              <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
