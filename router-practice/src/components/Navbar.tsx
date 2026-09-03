import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// NavLink is used instead of Link as with NavLink that element gets an active class when clicked which helps in css styling. (Though Link can also be used but in navbar its prefered to use NavLink)
export default function Navbar() {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
