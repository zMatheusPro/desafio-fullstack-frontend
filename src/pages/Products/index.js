import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Panel from "../_layout/Panel";
import { Product } from "../../components/Product";
import api from "../../services/api";
import styles from "./Products.module.css";

export default function NewProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      alert(err.response.data.error);
    }
  }, []);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel
      button={
        <Link to="/products/new">
          <button>New Product</button>
        </Link>
      }
      contentTitle={"Products"}
    >
      <div className={styles.productList}>
        {products.map((product) => (
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            id={`product-${product.id}`}
          />
        ))}
      </div>
    </Panel>
  );
}
