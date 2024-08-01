// css
import classes from "./style/OurTeam.module.css";

const OurTeam = () => {
  return (
    <div>
      <h1>Our Team</h1>
      <div className={classes.personal_card_container}>
        <div className={classes.personal_card}>
          <div className={classes.image_container}>
            <img
              src="https://car-rental-ten.vercel.app/static/media/1.4ba4d772bcd6e82365e8.png"
              alt="Luke Miller"
            />
          </div>
          <div className={classes.name}>Luke Miller</div>
          <div className={classes.function}>Salesman</div>
        </div>
        <div className={classes.personal_card}>
          <div className={classes.image_container}>
            <img
              src="https://car-rental-ten.vercel.app/static/media/2.f41d050c1c5b9e59fc22.png"
              alt="Michael Diaz"
            />
          </div>
          <div className={classes.name}>Michael Diaz</div>
          <div className={classes.function}>Business Owner</div>
        </div>
        <div className={classes.personal_card}>
          <div className={classes.image_container}>
            <img
              src="https://car-rental-ten.vercel.app/static/media/3.1d499e4b69de7b9e10fb.png"
              alt="Briana Ross"
            />
          </div>
          <div className={classes.name}>Briana Ross</div>
          <div className={classes.function}>Photographer</div>
        </div>
        <div className={classes.personal_card}>
          <div className={classes.image_container}>
            <img
              src="https://car-rental-ten.vercel.app/static/media/4.0e752081a69322c59b26.png"
              alt="Lauren Rivera"
            />
          </div>
          <div className={classes.name}>Laruen Rivera</div>
          <div className={classes.function}>Car Detailist</div>
        </div>
        <div className={classes.personal_card}>
          <div className={classes.image_container}>
            <img
              src="https://car-rental-ten.vercel.app/static/media/5.e46bcc8b44d7c4298aea.png"
              alt="Martin Rizz"
            />
          </div>
          <div className={classes.name}>Martin Rizz</div>
          <div className={classes.function}>Mechanic</div>
        </div>
        <div className={classes.personal_card}>
          <div className={classes.image_container}>
            <img
              src="https://car-rental-ten.vercel.app/static/media/6.528b8c60ae315bc6a52a.png"
              alt="Caitlyn Hunt"
            />
          </div>
          <div className={classes.name}>Caitlyn Hunt</div>
          <div className={classes.function}>Menager</div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
