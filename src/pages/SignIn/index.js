import styles from "./SignIn.module.css";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Sign in to your account</h1>
        <form action="">
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Insert your email address" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Insert your password" />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
