import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Auth.module.css";

export default function SignUp() {
  const { user, signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = e.target;
    if (!name.value || !email.value || !password.value)
      return alert("Please fill all fields");
    await signUp({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div className={styles.container}>
      {user && <Navigate to="/" replace={true} />}

      <div className={styles.box}>
        <h1>Sign up for free</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Name</label>
            <input type="text" id="name" placeholder="Insert your full name" />
          </div>
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
            Already have an account?
            <Link to="/signin">Sign-in now</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
