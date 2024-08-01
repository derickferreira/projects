// images
import ForStars from "../images/forStars.png";

// css
import classes from "./style/SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <div className={classes.title}>Show only</div>
        <label>
          <input type="checkbox" />
          <span>Up to £20</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Up to £100</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Up to £200</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Up to £400</span>
        </label>
      </ul>
      <ul>
        <div className={classes.title}>Product Rating</div>
        <label>
          <input type="radio" />
          <div className={classes.image_container}>
            <img src={ForStars} alt="ForStars" />
          </div>
          <span>4 and up</span>
        </label>
      </ul>
      <ul>
        <div className={classes.title}>Types</div>
        <label>
          <input type="checkbox" />
          <span>Clothes</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Eletronics</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Sports</span>
        </label>
      </ul>
      <ul>
        <div className={classes.title}>Shipping & returns</div>
        <label>
          <input type="checkbox" />
          <span>Free returns</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>1-3 day delivery</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Free Shipping</span>
        </label>
      </ul>
      <ul>
        <div className={classes.title}>Condition</div>
        <label>
          <input type="checkbox" />
          <span>New Items</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Used Items</span>
        </label>
      </ul>
      <ul>
        <div className={classes.title}>Seller</div>
        <label>
          <input type="checkbox" />
          <span>ShopBuy.com - Seller</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Amazon.com.br</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>KaBum!</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Magazine Luiza</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>YouWorkForThem</span>
        </label>
      </ul>
      <div className={classes.button}>More</div>
    </div>
  );
};

export default Sidebar;
