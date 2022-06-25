import styles from "./Product.module.css";

export function Product({ name, description, price, id }) {
  return (
    <div className={styles.product}>
      <h1>{name}</h1>
      <span>
        {price.toLocaleString("en", { style: "currency", currency: "usd" })}
      </span>
      <p>{description}</p>
    </div>
  );
}
