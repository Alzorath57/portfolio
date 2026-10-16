import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Julien Holtzinger
      </p>
      <a className="footer__link" href="#accueil">
        Retour en haut
      </a>
    </footer>
  );
}

export default Footer;
