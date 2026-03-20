import styles from "./Register.module.css";
import { useState } from "react";
import { BiSolidShow } from "react-icons/bi"
import { BiSolidHide } from "react-icons/bi";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.form}>
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" required minLength={3}
        title="Name must be at least 3 characters long" />
      <input type="email" placeholder="Email" required 
       pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
       title="Please enter a valid email address (e.g. example@gmail.com)" />
      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required 
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="Password must be at least 6 characters and include at least one letter and one number"
        />

        <span
          className={styles.toggle}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <BiSolidHide /> : <BiSolidShow />}
        </span>
      </div>
      <button type="submit" className={styles.btn}>Register</button>
    </form>
  );
}

export default Register;