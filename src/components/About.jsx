const About = () => {
  return (
    <div className="panel">
      <h2 className="section-title">About Me</h2>
      <p className="section-description">
        Dedicated individual with a strong foundation in software development
        and IT infrastructure. I am proficient in React, JavaScript, HTML, CSS,
        Python, SQL, and C++ with practical knowledge of Windows Server, Linux,
        VMware, networking, PowerShell, DBMS, and IT operations.
      </p>
      <div className="highlights-grid">
        <article className="card">
          <h3>Frontend Development</h3>
          <p>
            Developed responsive React applications with reusable components,
            dynamic API integration, and clean user interfaces.
          </p>
        </article>
        <article className="card">
          <h3>Cloud and Infrastructure</h3>
          <p>
            Trained on Windows Server 2022, Linux administration, VMware
            virtualization, and networking fundamentals for enterprise systems.
          </p>
        </article>
        <article className="card">
          <h3>Automation and Operations</h3>
          <p>
            Hands-on exposure to PowerShell and Python scripting, ITIL concepts,
            and infrastructure monitoring workflows.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
