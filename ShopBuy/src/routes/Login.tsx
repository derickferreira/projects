// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";

// react-router
import { Link } from "react-router-dom";

import classes from "./style/Login.module.css";

const Login = () => {
  return (
    <div className={classes.log_container}>
      <h1>Login</h1>
      <form>
        <label>
          <span>email</span>
          <input type="text" />
        </label>
        <label>
          <span>password</span>
          <input type="text" />
        </label>
        <Link to="/register" className={classes.sign_up}>
          Don't have an account? Create on right here!
        </Link>
        <button>Enter</button>
        <ul className={classes.login_platforms}>
          <li>
            <FcGoogle />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <BsGithub />
          </li>
          <li>
            <PiMicrosoftOutlookLogoBold />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
