// css
import classes from "./style/Company.module.css";

// react-icons
import { BiWorld } from "react-icons/bi";
import { GiPlantSeed } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

const Company = () => {
  return (
    <div className={classes.about_company}>
      <h3>About Company</h3>
      <div className={classes.informations_container}>
        <div className={classes.image_container}>
          <img
            src="https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="company picture"
          />
        </div>
        <div className={classes.informations}>
          <h1>
            Discover more about our headquarters and the locations where we
            deliver exceptional service.
          </h1>
          <p>
            Discover our convenient locations and experience our seamless
            delivery system firsthand. Visit us to explore partnership
            opportunities and discover the future of efficient product delivery.
          </p>
          <ul className={classes.about_places}>
            <li>
              <BiWorld />
              <p>Contries we Server</p>
              <span className={classes.number}>45</span>
            </li>
            <li>
              <GiPlantSeed />
              <p>Committed to sustainability</p>
            </li>
            <li>
              <GrUserWorker />
              <p>Available job Openings</p>
              <span className={classes.number}>1545</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
