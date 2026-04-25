const contactItems = [
  {
    label: "Email",
    value: "tanya.connect09@gmail.com",
    href: "mailto:tanya.connect09@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9302435699",
    href: "tel:+919302435699",
  },
  {
    label: "GitHub",
    value: "github.com/TanyaSuryavanshi",
    href: "https://github.com/TanyaSuryavanshi",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tanya-suryavanshi",
    href: "https://www.linkedin.com/in/tanya-suryavanshi/",
  },
];

const Contact = () => {
  return (
    <div className="panel">
      <h2 className="section-title">Contact</h2>
      <p className="section-description">Open to full-time roles and collaborations.</p>
      <div className="contact-list">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.label === "Phone" || item.label === "Email" ? undefined : "_blank"}
            rel={item.label === "Phone" || item.label === "Email" ? undefined : "noreferrer"}
            className="card contact-item"
          >
            <span className="contact-label">{item.label}</span>
            <span>{item.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
