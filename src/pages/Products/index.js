import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Products.module.css";

export default function NewProducts() {
  const { loggout } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link to="/products/new">
            <button>New Product</button>
          </Link>
          <button className={styles.logout} onClick={loggout}>
            Logout
          </button>
        </div>
        <div className={styles.box}>
          <h1>Products</h1>
        </div>
      </div>
    </div>
  );
}
