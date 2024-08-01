// css
import classes from "./style/Steps.module.css";

// react-icons
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";

type stepsProps = {
  currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className={classes.steps}>
      <div className={`${classes.step} ${classes.active}`}>
        <FaRegUserCircle />
        <p>Identification</p>
      </div>
      <div
        className={`${classes.step} ${currentStep >= 1 ? classes.active : ""}`}
      >
        <RiLockPasswordFill />
        <p>Personal Data</p>
      </div>
      <div
        className={`${classes.step} ${currentStep >= 2 ? classes.active : ""}`}
      >
        <MdDesignServices />
        <p>Terms and Services</p>
      </div>
    </div>
  );
};

export default Steps;
