import "./Contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__text">
        Mon profil correspond à vos besoins ? Écrivez-moi pour planifier un
        échange technique ou discuter d'une opportunité.
      </p>
      <a className="contact__email" href="mailto:julien.holtzinger@gmail.com">
        M'écrire un e-mail
      </a>
      <ul className="contact__links">
        <li className="contact__item">
          <a
            href="https://www.linkedin.com/in/julien-holtzinger"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact__item">
          <a
            href="https://github.com/Alzorath57"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
