import styles from "./BestSeller.module.css";
import { useNavigate } from "react-router-dom";
import cookie from "../../../assets/image/cookie.jpg"
import macaron from "../../../assets/image/macaron.jpg"
import tart from "../../../assets/image/tart.jpg"
import pastry from "../../../assets/image/pastry.jpg"
import cake from "../../../assets/image/cake.jpg"
import eclair from "../../../assets/image/eclair.jpg"

function BestSeller() {
   const navigate = useNavigate();

  const data = [
  { name: "Cookie", image: cookie },
  { name: "Macaron", image: macaron },
  { name: "Tart", image: tart },
  { name: "Pastry", image: pastry },
  { name: "Cake", image: cake },
  { name: "Eclair", image: eclair },
];
  return (
    <section className={styles.bestSellerSection}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.cardContainer}>
          {data.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => navigate("/menu")}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;