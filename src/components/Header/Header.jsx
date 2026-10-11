import { useState } from "react";
import "./Header.scss";

const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#a-propos", label: "À propos" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#" className="header__logo">
        J. Holtzinger
      </a>
      <button
        className="header__toggle"
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="header__burger"></span>
      </button>
      <nav className={isMenuOpen ? "nav nav--open" : "nav"}>
        <ul className="nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
