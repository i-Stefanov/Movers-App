import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <p>Movers App</p>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
