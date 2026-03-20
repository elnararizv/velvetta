import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/image/heroImg.png"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Sweet Moments, Crafted with Love</h1>
        <p>
          Discover handmade desserts made with the finest ingredients and a touch of elegance.
        </p>
        <Link to="/menu" className={styles.btn}>
          Explore Menu
        </Link>
      </div>
      <div className={styles.image}>
        <img src={heroImg} alt="Hero Cake" />
      </div>
    </section>
  );
};

export default Hero;