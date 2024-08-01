import classes from "./style/Home.module.css";

// react-icons
import { TbShoppingCartShare } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

import { TbWorldDollar } from "react-icons/tb";
import { CiBitcoin } from "react-icons/ci";
import { GrUserWorker } from "react-icons/gr";

// hooks
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

import choosePNG from "../images/Design sem nome (1).png";

const Home = () => {
  const { data } = useFetch(url);

  return (
    <div className={classes.home_container}>
      <h2 className={classes.sale_products}>Sale Products</h2>
      <ul className={classes.promotions_product}>
        {data?.slice(0, 3).map((item) => (
          <li key={item.id} className={classes.product_container}>
            <div className={classes.image_container}>
              <img src={item.imageURL} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <div className={classes.price_container}>
              <span className={classes.risk_price}>{item.riskPrice}</span>
              <span>{item.price}</span>
            </div>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
      <div className={classes.title}>
        <h4>Buy now!</h4>
        <h1>And know that you still have...</h1>
      </div>
      <ul className={classes.card_container}>
        <li>
          <TbShoppingCartShare />
          <h3>Delivery System</h3>
          <p>
            We've got a quick, safe, one-stop delivery system. Be ready to get
            your item on the same day you buy it!
          </p>
        </li>
        <li>
          <CiDiscount1 />
          <h3>First Purchase Coupons</h3>
          <p>
            Whenever you make a purchase, you'll always get a bonus coupon. Make
            the most of it!
          </p>
        </li>
        <li>
          <MdSupportAgent />
          <h3>Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </li>
      </ul>
      <section className={classes.banner}>
        <h1>Save a lot of time with our sales system</h1>
        <p>
          And be cautions when making sales; we always recommend using our
          system and never providing your personal details.{" "}
          <span>Let us handle everything</span>!
        </p>
      </section>
      <div className={classes.choose_container}>
        <div className={classes.image_choose_container}>
          <img src={choosePNG} alt="choose photo" />
        </div>
        <div className={classes.why_container}>
          <div className={classes.why_about_us}>
            <h4>Why Choose Us</h4>
            <h1>Best valued deals you will ever find</h1>
            <p>
              A unique delivery system, a unique sales system, a unique
              purchasing system - come and be unique. If our customer not only
              enjoys our marked but also wants to contribute to a better UX,
              simply leave a comment in our FAQ on About Us. We'll listen you
              and definitly work to make this place even more unique for you.
            </p>
            <button>
              <span>Find Details</span>
              <GrFormNext />
            </button>
          </div>
          <ul className={classes.container_right}>
            <li>
              <TbWorldDollar />
              <div className={classes.box_text}>
                <h3>A global sales reach</h3>
                <p>
                  In addition to selling worldwide, we go to extra mile to
                  reduce taxes. We believe lower taxes mean fewer barriers to
                  accessing our products, so take advantage!
                </p>
              </div>
            </li>
            <li>
              <CiBitcoin />
              <div className={classes.box_text}>
                <h3>Crypto System</h3>
                <p>
                  Our app features a sleek, tech-forward interface, fully
                  compatible with cryptocurrencies. If you're intriged, click
                  here!
                </p>
              </div>
            </li>
            <li>
              <GrUserWorker />
              <div className={classes.box_text}>
                <h3>Job Opportunities</h3>
                <p>
                  If you're a young talend looking to join us, whether in
                  delivery or IT, get in touch. We'd be thrilled to have you on
                  board!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
