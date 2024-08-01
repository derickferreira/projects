// components
import MainShop from "../components/MainShop"
import Sidebar from "../components/Sidebar"

// css
import "./style/Shop.css";

const Shop = () => {
  return (
    <div className="shop_container">
      <Sidebar/>
      <MainShop/>
    </div>
  )
}

export default Shop