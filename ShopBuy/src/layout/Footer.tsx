// images
import dinoImage from "../images/dinoTransparent.png";

// react-icons
import { FaPhone } from "react-icons/fa6";

// css
import classes from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.banner}>
        <h2>Do you need to speak to us?</h2>
        <span>
          <FaPhone/>
          <h3>
            +55 21 99399-5120
          </h3>
        </span>
      </div>
      <ul className={classes.email_container}>
        <div className={classes.email_field}>
          <h1>You're still here!</h1>
          <p>
            Kindly link your email to our website! This way, you'll be able to
            receive updates on promotions and new products. We're a company
            dedicated to costumer interactivity, so feel free to choose how this
            interaction with the company will be carried out through your email
            settings!
          </p>
          <div className={classes.input_email}>
            <input type="text" placeholder="Your email" />
            <button>Send</button>
          </div>
        </div>
        <div className={classes.image_container}>
          <img src={dinoImage} alt="dino logo" />
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
