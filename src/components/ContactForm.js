import emailjs from "emailjs-com";
import React from "react";
import "./ContactForm.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_sgbjypz",
        e.target,
        "user_NdKIjOTJG11UTuJIbID06"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          className="contact-form-text"
          placeholder="your name"
        />
        <input
          type="text"
          name="email"
          className="contact-form-text"
          placeholder="your email"
        />
        <input
          type="text"
          name="subject"
          className="contact-form-text"
          placeholder="subject"
        />
        <textarea
          type="text"
          name="message"
          className="contact-form-text"
          placeholder="your message"
        />
        <input type="submit" value="Send" className="contact-form-btn" />
      </form>
    </div>
  );
}
