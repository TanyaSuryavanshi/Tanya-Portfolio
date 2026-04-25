import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faCode,
  faDiagramProject,
  faGraduationCap,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { href: "#home", label: "Home", icon: faHouse },
  { href: "#about", label: "About", icon: faUser },
  { href: "#education", label: "Education", icon: faGraduationCap },
  { href: "#experience", label: "Experience", icon: faBriefcase },
  { href: "#skills", label: "Skills", icon: faCode },
  { href: "#projects", label: "Projects", icon: faDiagramProject },
  { href: "#contact", label: "Contact", icon: faAddressCard },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const navElement = document.querySelector("nav");
      if (navElement) {
        navElement.classList.toggle("scrolled", window.scrollY > 30);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="container nav-content">
        <button
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <div className={`right ${isOpen ? "open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={closeMenu} className="nav-link">
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
