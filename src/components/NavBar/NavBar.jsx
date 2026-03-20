import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/image/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Velvetta" />
          </Link>
        </div>

        <div className={styles.navigate}>
          <ul className={styles.links}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <Link to="/auth">
            <button className={styles.authBtn}>Sign In</button>
          </Link>

          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={25} />
          </div>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ""
          }`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`${styles.sideMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <div
          className={styles.closeIcon}
          onClick={() => setMenuOpen(false)}>
          <FiX size={25} /> </div>

        <NavLink to="/" className={({ isActive }) =>
          isActive ? styles.active : ""
        } onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/menu" className={({ isActive }) =>
          isActive ? styles.active : ""
        } onClick={() => setMenuOpen(false)}>
          Menu
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
          isActive ? styles.active : ""
        } onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? styles.active : ""
        } onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

        <Link to="/auth" onClick={() => setMenuOpen(false)}>
          <button className={styles.authBtn}>Sign In</button>
        </Link>

              {/* {isLoggedIn ? (
              <button  className={styles.authBtn}
                 onClick={() => {
                  setMenuOpen(false);}}>Logout</button>
                 ) : (
                  <Link to="/auth" onClick={() => setMenuOpen(false)}>
                   <button className={styles.authBtn}>Sign In</button>
                  </Link>
                   )} */}

      </div>
    </>
  );
}

export default Navbar;