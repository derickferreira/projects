import classes from "./style/Contact.module.css";

// react-icons
import { BiMessageAltDetail } from "react-icons/bi";

import { CiPhone } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.informations_container}>
        <h1>Need additional information?</h1>
        <p>
          Alright mate, our team will check it out in a few minutes! your
          message helps us out in any way, be ready to receive a little
          something in return, so if you've got an idea, don't miss the chance
          to send it our way!
        </p>
        <ul>
          <li>
            <CiPhone />
            <span>(123) 456-7869</span>
          </li>
          <li>
            <BiMessageAltDetail />
            <span>shopbuy@gmail.com</span>
          </li>
          <li>
            <CiLocationArrow1 />
            <span>Leighton Buzzard, England</span>
          </li>
        </ul>
      </div>
      <form>
        <label>
          <span>
            Full name <span>*</span>
          </span>
          <input type="text" placeholder="For example: 'Sofia Ferreira'" />
        </label>
        <label>
          <span>
            E-mail <span>*</span>
          </span>
          <input type="text" placeholder="youremail121@gmail.com" />
        </label>
        <label>
          <span>
            Tell us about it <span>*</span>
          </span>
          <textarea placeholder="Write Here."></textarea>
        </label>
        <button>
          <BiMessageAltDetail />
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
