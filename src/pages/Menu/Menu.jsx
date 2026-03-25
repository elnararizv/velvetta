import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { FaCookieBite } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Menu() {

  const [products, setProducts] = useState([])
  const navigate= useNavigate()

  async function getProducts() {
    try {
      const result = await getDocs(collection(db, "products"));
      const data = result.docs.map((val) => ({
        id: val.id,
        ...val.data()
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }

  }


  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        <div className={styles.products}>
          {products.map((data) => (
            <div className={styles.card} key={data.id} onClick={() => navigate(`/product/${data.id}`)} >
              <div className={styles.img}>
                <img src={data.image} alt={data.name} /></div>
              <h3>{data.name}</h3>
              <p>{data.price}$</p>
            </div>
          ))}
        </div>
        <div className={styles.sidebar}>
          <div className={styles.search}>
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search desserts..."
              />
            </div>
          </div>

          <div className={styles.sort}>
            <h4>Sort</h4>
            <select>
              <option value="default">Sort by</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className={styles.filter}>
            <h4>Filter</h4>
              <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>All</p>
            </div>
            <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>Cake</p>
            </div>
             <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>Cookie</p>
            </div>
             <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>Eclair</p>
            </div>
            <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>Macaron</p>
            </div>
             <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>Pastry</p>
            </div>
             <div className={styles.category} key={data.id}>
              <span><FaCookieBite /></span>
              <p>Tart</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;