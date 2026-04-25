const Skills = () => {
  const skillsData = {
    Languages: ["JavaScript", "HTML", "CSS", "Python", "C", "C++"],
    Frameworks: ["React", "Flask"],
    Infrastructure: ["Windows Server 2022", "Linux", "VMware"],
    "IT Operations": [
      "Networking Fundamentals",
      "Storage and Backup",
      "Infrastructure Monitoring",
      "ITIL Concepts",
    ],
    "Scripting and Databases": ["PowerShell", "MySQL"],
    "Version Control": ["GitHub","Git"],
    "Tools": ["Cursor","Claude","OpenAI"],
    "Concepts": ["LLM-based development", "Prompt Engineering", "Debugging", "Code Optimization"],
  };

  return (
    <div className="panel">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([title, items]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <div className="chip-group">
              {items.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
