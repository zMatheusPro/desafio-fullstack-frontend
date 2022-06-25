import { useAuth } from "../../contexts/AuthContext";
import styles from "./Panel.module.css";

export default function Panel({ children, button, contentTitle }) {
  const { loggout } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          {button}
          <button className={styles.logout} onClick={loggout}>
            Logout
          </button>
        </div>
        <div className={styles.box}>
          <h1>{contentTitle}</h1>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}
