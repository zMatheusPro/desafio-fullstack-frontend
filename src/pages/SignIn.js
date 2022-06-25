import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Auth.module.css";

export default function SignIn() {
  const { user, signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    if (!email.value || !password.value) return alert("Please fill all fields");
    await signIn({ email: email.value, password: password.value });
  };

  return (
    <div className={styles.container}>
      {user && <Navigate to="/" replace={true} />}

      <div className={styles.box}>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Insert your email address"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Insert your password"
            />
          </div>
          <button type="submit">Sign in</button>
          <span>
            Don't have an account? <Link to="/signup">Sign-up now</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
