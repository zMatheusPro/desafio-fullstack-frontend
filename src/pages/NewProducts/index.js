import { Link } from "react-router-dom";
import api from "../../services/api";
import Panel from "../_layout/Panel";
import styles from "./NewProducts.module.css";

export default function NewProducts() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, price } = e.target;
    if (!name.value || !description.value || !price.value)
      return alert("Please fill all fields");

    try {
      await api.post("/products", {
        name: name.value,
        description: description.value,
        price: price.value,
      });
      alert("Product created successfully");
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.err);
    }
  };

  return (
    <Panel
      button={
        <Link to="/">
          <button>Come back</button>
        </Link>
      }
      contentTitle={"Create new product"}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter the product name" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" placeholder="Enter product value" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Enter product description" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </Panel>
  );
}
