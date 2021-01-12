import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";

import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const goBack = (e) => {
    event.preventDefault();
    router.back();
  };

  const { user } = useContext(AuthContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          {!isHome && (
            <div className={styles.back}>
              <a onClick={goBack}>{"<"}Back</a>
            </div>
          )}
        </div>
        <div className={styles.title}>
          <h1>Create a Profile</h1>
        </div>

        <div className={styles.auth}>
          {user ? (
            <Link href="/account">
              <a>{user.email}</a>
            </Link>
          ) : (
            <Link href="/login">
              <h3>
                Click <a>Here</a> to Continue
              </h3>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
