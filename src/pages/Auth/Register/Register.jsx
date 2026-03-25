import styles from "./Register.module.css";
import { useState } from "react";
import { BiSolidShow } from "react-icons/bi"
import { BiSolidHide } from "react-icons/bi";
import { auth } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate= useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  async function userRegister(e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(response.user, { displayName: fullName });
       Swal.fire({
              icon: 'success',
              title: 'Successful!',
              text: "Welcome!",
              timer: 2000,
              showConfirmButton: false,
            }).then(() => navigate("/"));
    } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Something went wrong."
            });
      console.log("Register error:", error.message);
    }
  }

  return (
    <form className={styles.form} onSubmit={userRegister}>
      <h2>Register</h2>
      <input name="fullName" type="text" placeholder="Full Name" required minLength={3}
        title="Name must be at least 3 characters long" />
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