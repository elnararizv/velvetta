import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { FaCookieBite } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const result = await getDocs(collection(db, "products"));
      const data = result.docs.map((val) => ({
        id: val.id,
        ...val.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); 
    }, 500); 

    return () => clearTimeout(timer);
  }, [search]);


  const filteredProducts = products
    .filter((p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "a-z") return a.name.localeCompare(b.name);
      if (sortOption === "z-a") return b.name.localeCompare(a.name);
      if (sortOption === "low") return a.price - b.price;
      if (sortOption === "high") return b.price - a.price;
      return 0;
    });


  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        <div className={styles.products}>
          {currentProducts.map((data) => (
            <div className={styles.card} key={data.id} onClick={() => navigate(`/product/${data.id}`)}>
              <div className={styles.img}>
                <img src={data.image} alt={data.name} />
              </div>
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.sort}>
            <h4>Sort</h4>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="default">Sort by</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className={styles.filter}>
            <h4>Filter</h4>
            {["All", "Cake", "Cookie", "Eclair", "Macaron", "Pastry", "Tart"].map((cat) => (
              <div
                className={`${styles.category} ${category === cat ? styles.active : ""}`}
                key={cat}
                onClick={() => { setCategory(cat); setCurrentPage(1); }}
              >
                <span><FaCookieBite /></span>
                <p>{cat}</p>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Prev
            </button>


            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                className={`${styles.pageBtn} ${currentPage === num ? styles.activePage : ""}`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}

            <button
              className={styles.pageBtn}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Menu;