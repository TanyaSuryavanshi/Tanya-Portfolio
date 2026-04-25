const Education = () => {
  const education = [
    {
      degree: "B.Tech, ECE with AI",
      institute: "Indira Gandhi Delhi Technical University for Women",
      duration: "August 2021 - June 2025",
      score: "Artificial Intelligence Specialization",
    },
    {
      degree: "Higher Secondary (Class 12)",
      institute: "Green Wood Public School",
      duration: "2020 - 2021",
      score: "Score: 85.4%",
    },
    {
      degree: "Secondary (Class 10)",
      institute: "Green Wood Public School",
      duration: "2018 - 2019",
      score: "Score: 83%",
    },
  ];

  return (
    <div className="panel">
      <h2 className="section-title">Education</h2>
      <div className="stack-grid">
        {education.map((item) => (
          <article className="card" key={item.degree}>
            <h3>{item.degree}</h3>
            <p>{item.institute}</p>
            <p className="muted">{item.duration}</p>
            <p className="muted">{item.score}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Education;
