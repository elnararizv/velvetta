import styles from "./Footer.module.css";
import logo from "../../assets/image/logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img src={logo} alt="Velvetta" className={styles.logo} />
          <p className={styles.description}>
            Handcrafted desserts made with love and quality ingredients.
          </p>
        </div>

        <div className={styles.section}>
          <h3>Contact</h3>
          <p><FaPhone /> +994 50 123 45 67</p>
          <p><FaEnvelope /> info@velvetta.com</p>
        </div>

        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.social}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>
    
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Velvetta. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;