// react-router
import { NavLink } from "react-router-dom";

// react-icons
import { FaBars } from "react-icons/fa";

// css
import classes from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.title}>
        <div className={classes.shop}>Shop</div>
        <div className={classes.buy}>Buy</div>
      </NavLink>
      <nav className={classes.navbar}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </nav>
      <div className={classes.bar_btn}>
        <FaBars />
      </div>
      <div className={classes.account_entries}>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <button className={classes.register}>
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
