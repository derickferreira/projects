// css
import classes from "./style/Search.module.css";

// hooks
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data } = useFetch(url);

  return (
    <div>
      <ul className={classes.promotions_product}>
        {data &&
          data.map((item) => (
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
    </div>
  );
};

export default Search;
