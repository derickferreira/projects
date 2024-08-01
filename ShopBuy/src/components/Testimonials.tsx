// css
import classes from "./style/Testi.module.css";

// react-icons
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className={classes.testimonials_container}>
      <div className={classes.testimonials}>
        <h3>Reviewed by People</h3>
        <h1>Client's Testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className={classes.testimonials_posts}>
        <div className={classes.post}>
            <p>
              "I loved this new way of delivering products, fast, efficient and with
              quality, we can even change the route while the delivery is being
              made!"
            </p>
            <div className={classes.profile_picture_container}>
              <div className={classes.image_container}>
                <img
                  src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Derick Ferreira"
                />
              </div>
              <div className={classes.name}>
                <h4>Derick Ferreira</h4>
                <span className={classes.location}>Belgrade</span>
              </div>
              <FaQuoteRight />
            </div>
        </div>
        <div className={classes.post}>
          <p>
            "Due to an oversight on my part, I ended up having to contact
            support, exceptional service, within 10 minutes my problem was
            corrected and delivery was very fast!"
          </p>
          <div className={classes.profile_picture_container}>
            <div className={classes.image_container}>
              <img
                src="https://images.pexels.com/photos/8517921/pexels-photo-8517921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sophie Stela"
              />
            </div>
            <div className={classes.name}>
              <h4>Sophie Stela</h4>
              <span className={classes.location}>London</span>
            </div>
            <FaQuoteRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
