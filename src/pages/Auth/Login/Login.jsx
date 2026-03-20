import React, { useState } from "react";
import styles from "./Login.module.css";
import { BiSolidShow } from "react-icons/bi"
import { BiSolidHide } from "react-icons/bi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.form}>
      <h2>Login</h2>

      <input type="email" placeholder="Email" required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Please enter a valid email address (e.g. example@gmail.com)" />

      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="Password must be at least 6 characters and include at least one letter and one number"/>

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