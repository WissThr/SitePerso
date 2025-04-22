import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import GH from "../assets/github.svg";
import Gmail from "../assets/gmail.svg";

function Contact() {
  const formRef = useRef();
  const recaptchaRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert("Merci de valider le CAPTCHA !");
      return;
    }

    emailjs
      .sendForm(
        "service_ydjxo6d",
        "template_xke6cfg",
        formRef.current,
        "rLCVzmHiV5qBXoOj-"
      )
      .then(() => {
        alert("Message envoyé !");
        formRef.current.reset();
        recaptchaRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur à l’envoi du message.");
      });
  };

  return (
    <section style={styles.section}>
      <div style={styles.links}>
        <h3 style={styles.title}>Liens importants</h3>
        <a href="mailto:wissam.tahiri.75@gmail.com" className="link-card">
          <img
            src={Gmail}
            alt="Gmail"
            style={{ width: "24px", marginRight: "8px" }}
          />
          <span>wissam.tahiri.75@gmail.com</span>
        </a>
        <a
          href="https://github.com/WissThr"
          target="_blank"
          rel="noreferrer"
          className="link-card"
        >
          <img
            src={GH}
            alt="GitHub"
            style={{ width: "24px", marginRight: "8px" }}
          />
          <span>github.com/WissThr</span>
        </a>
      </div>

      <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
        <h3 style={styles.title}>Envoyer un message</h3>
        <p style={styles.txt}>
          Si vous souhaitez me contacter, remplissez vos informations
          ci-dessous. <br />
          Je vous répondrai dès que possible!
        </p>
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="title"
          placeholder="Objet"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          style={styles.textarea}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LespB4rAAAAAIsJvZGo0Jpa4KnwRoOqnTuitiXh"
          style={styles.captcha}
        />
        <button type="submit" style={styles.button}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#0056b3",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "3rem",
    alignItems: "center",
    padding: "2.5rem 0",
    backgroundColor: "#f9f9fb",
    borderRadius: "10px",
    margin: "2rem 0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "10px",
    backgroundColor: "#f9f9fb",
    borderRadius: "10px",
    margin: "2rem 0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.75rem",
    fontSize: "1rem",
    minHeight: "120px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  captcha: {
    alignSelf: "center",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#0056b3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  txt: {
    fontSize: "1rem",
    marginTop: "0 px",
  },
};

export default Contact;
