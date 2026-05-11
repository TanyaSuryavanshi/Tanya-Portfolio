const Projects = () => {
  const projectItems = [
    {
      title: "E-Commerce App",
      description:
        "Developed a modern e-commerce web application with dynamic product listings, price and ratings display, and API-driven content.",
      tech: ["React", "JavaScript", "JSX", "CSS", "Node.js", "Vite"],
      link: "https://github.com/TanyaSuryavanshi/E-Commerce-App-React",
      linkLabel: "GitHub Repository",
    },
    {
      title: "REST APIs using Flask",
      description:
        "Designed RESTful APIs to manage store and inventory data, with CRUD operations, item creation, and store filtering by name.",
      tech: ["Python", "Flask"],
      link: "https://github.com/TanyaSuryavanshi/Rest-API",
      linkLabel: "GitHub Repository",
    },
    {
      title: "Next Word Recommender",
      description:
        "Built an n-gram based next-word recommendation model with text preprocessing and token cleanup for better predictions.",
      tech: ["Regex", "NumPy", "Pandas", "Python"],
      link: "https://github.com/TanyaSuryavanshi/Next-word-Recommender-System",
      linkLabel: "GitHub Repository",
    },
  ];

  return (
    <div className="panel">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectItems.map((project) => (
          <article className="card project-card" key={project.title}>
            
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="chip-group">
                {project.tech.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="link project-link"
            >
              {project.linkLabel}
            </a>

          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;