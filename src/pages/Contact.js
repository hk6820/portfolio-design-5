import React, { useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from '../components/emailService';

const Contact = ({
  heading = "Say Hello",
  id,
  fields = {
    firstName: "First name",
    lastName: "Full name",
    email: "Email address",
    subject: "Subject of the message",
    message: "Type your message here..",
  },
  buttonLabel = "Send Message",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact-section" id={id || 'contact'}>
      <h2>{heading}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            placeholder={fields.firstName}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder={fields.lastName}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          placeholder={fields.email}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder={fields.subject}
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder={fields.message}
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">{buttonLabel}</button>
      </form>
    </section>
  );
};

export default Contact;
