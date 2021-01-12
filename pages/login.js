import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../styles/Login.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to create an account" />
      </Head>

      <div className={styles.container}>
        <div className={styles.V__Center}>
          <h2>Just Enter Your Email</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email address..."
            />

            <button className={styles.button} type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
