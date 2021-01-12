import Head from "next/head";
import { useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";
import FileUpload from "../components/FileUpload";
import Navbar from "../components/Navbar";
import styles from "../styles/Account.module.css";

export default function Account() {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <p>Please Login or register</p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.Accout__Container}>
      <Head>
        <title>Account page</title>
        <meta
          name="description"
          content="Your account page for viewing your orders/information"
        />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

// needs to go in the navigation section whenever that is created
{
  /* <a href="#" onClick={logoutUser}>
        Logout
      </a> */
}
