import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./NewProducts.module.css";

export default function NewProducts() {
  const { loggout } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link to="/">
            <button>Come back</button>
          </Link>
          <button className={styles.logout} onClick={loggout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
