import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqData = [
    {
      question: "What are your working hours?",
      answer: "Our bakery is open from 09:00 to 22:00."
    },
    {
      question: "Do you offer delivery?",
      answer: "No, we currently do not provide delivery services."
    },
    {
      question: "Do you accept custom orders (e.g., birthday cakes, wedding cakes)?",
      answer: "Yes! Please contact us directly to place your custom order."
    }
  ];

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2>Get in Touch</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required minLength={3} />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <span>We are always ready to help you and answer your questions</span>
            <p><FaPhoneAlt className={styles.icon}/> +994 50 123 45 67</p>
            <p><FaEnvelope className={styles.icon}/> info@velvetta.com</p>
            <p><FaMapMarkerAlt className={styles.icon}/> 123 Velvetta Street, City, Country</p>
          </div>

          <div className={styles.faq}>
            <h3>FAQs</h3>
            {faqData.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <div className={styles.question} onClick={() => toggleFaq(index)}>
                  {item.question}
                  <span>{faqOpen === index ? "-" : "+"}</span>
                </div>
                {faqOpen === index && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;