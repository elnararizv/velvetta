import styles from "./About.module.css";
import about1 from "../../assets/image/about1.jpg";
import about2 from "../../assets/image/about2.jpg";
import about3 from "../../assets/image/about3.jpg";
import about4 from "../../assets/image/about4.jpg";

function About() {
  const images = [about1, about2, about3, about4];

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Welcome to Velvetta!</h2>
          <p>
            At Velvetta, we are passionate about creating freshly baked pastries and custom cakes,
            made with love and the finest ingredients. Every treat we craft is designed to bring
            joy and a touch of sweetness to your day.
          </p>
          <p>
            Our mission is simple: to spread happiness through delicious baked goods. From flaky
            croissants and decadent cookies to beautifully designed custom cakes, each item is carefully
            made to ensure it’s as delightful as it looks.
          </p>
          <p>
            Whether you’re stopping by for your daily sweet indulgence or planning a special custom cake 
            for a celebration, we are thrilled to share our passion with you. At Velvetta, every bite tells a story, 
            and we can’t wait to be part of your happy moments.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          {images.map((img, index) => (
            <div
              key={index}
              className={styles.imgCard}
            >
              <img src={img} alt="Bakery Photo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;