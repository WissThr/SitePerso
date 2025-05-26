import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import GH from "../assets/tools/github.svg";
import Gmail from "../assets/gmail.svg";

const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const captchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function Contact() {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert("Please, check the CAPTCHA !");
      return;
    }

    emailjs
      .sendForm(service, template, formRef.current, publicKey)
      .then(() => {
        alert("Message sent !");
        formRef.current.reset();
        recaptchaRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending message. Please try again later.");
        recaptchaRef.current.reset();
      });
  };

  return (
    <section style={styles.section}>
      <div style={styles.links}>
        <h3 style={styles.title}>Important Links</h3>
        <a href="mailto:wissam.tahiri.75@gmail.com" className="link-card">
          <img src={Gmail} alt="Gmail" style={styles.icon} />
          <span>wissam.tahiri.75@gmail.com</span>
        </a>
        <a
          href="https://github.com/WissThr"
          target="_blank"
          rel="noreferrer"
          className="link-card"
        >
          <img src={GH} alt="GitHub" style={styles.icon} />
          <span>github.com/WissThr</span>
        </a>
      </div>

      <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
        <h3 style={styles.title}>Send a message</h3>
        <p style={styles.txt}>
          If you want to contact me, fill your informations below.
          <br />
          I'll answer as soon as possible!
        </p>
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
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
          placeholder="Message"
          required
          style={styles.textarea}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={captchaKey}
          style={styles.captcha}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem 1rem",
    minHeight: "100vh",
    margin: "0 auto",
    width: "100%",
    maxWidth: "1000px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "600",
    color: "#112D4E",
    margin: "0 0 1rem 0",
    textAlign: "center",
  },
  txt: {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    lineHeight: "1.7",
    color: "#333",
    textAlign: "center",
    marginBottom: "1rem",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "2rem",
    alignItems: "center",
    padding: "2rem 1rem",
    backgroundColor: "#F9F7F7",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem 1rem",
    backgroundColor: "#F9F7F7",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "0.75rem",
    fontSize: "1rem",
    minHeight: "120px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  captcha: {
    alignSelf: "center",
  },
  button: {
    padding: "0.75rem",
    fontSize: "clamp(1rem, 4vw, 1.5rem)",
    backgroundColor: "#0056b3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    maxWidth: "300px",
    alignSelf: "center",
  },
};

export default Contact;
