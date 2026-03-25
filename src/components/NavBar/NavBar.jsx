import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/image/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
      setMenuOpen(false);
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
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

          {user ? (
            <button className={styles.authBtn} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/auth" onClick={() => setMenuOpen(false)}>
              <button className={styles.authBtn}>Sign In</button>
            </Link>
          )}

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

        {user ? (
          <button className={styles.authBtn} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/auth" onClick={() => setMenuOpen(false)}>
            <button className="authBtn">Sign In</button>
          </Link>
        )}

      </div>
    </>
  );
}

export default Navbar;