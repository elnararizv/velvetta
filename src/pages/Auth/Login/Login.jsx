import React, { useState } from "react";
import styles from "./Login.module.css";
import { BiSolidShow } from "react-icons/bi"
import { BiSolidHide } from "react-icons/bi";
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  async function userLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: 'success',
        title: 'Logged in!',
        text: "Welcome!",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => navigate("/"));
    } catch (error) {
       console.log("Login error:", error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong."
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={userLogin}>
      <h2>Login</h2>

      <input name="email" type="email" placeholder="Email" required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Please enter a valid email address (e.g. example@gmail.com)" />

      <div className={styles.passwordWrapper}>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="Password must be at least 6 characters and include at least one letter and one number" />

        <span
          className={styles.toggle}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <BiSolidHide /> : <BiSolidShow />}
        </span>
      </div>

      <button type="submit" className={styles.btn}>
        Login
      </button>
    </form>
  );
}

export default Login;