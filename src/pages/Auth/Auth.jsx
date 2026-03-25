import { useState } from "react";
import styles from "./Auth.module.css";
import Login from "./Login/Login";
import Register from "./Register/Register";


function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.auth}>
      <div className={styles.image}>
          <h1>Welcome to Velvetta</h1>
      </div>

      <div className={styles.form}>
        <div>
          {isLogin ? <Login /> : <Register />}
          <p className={styles.toggle}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth