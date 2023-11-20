import lemoncake from "../../../Assets/lemon dessert.jpg";
import "./CardComponent.css";

export function CardComponent() {
  return (
    <div className="card_class">
      <img className="card_image" src={lemoncake}></img>
      <div className="food_desc">
        <div className="price">
          <h3 className="card_title dark_txt fw_xbold">Greek Salad</h3>
          <h5 className="sectionCategories price_txt fw_xxbold">$ 12.99</h5>
        </div>
        <p className="cardDescription dark_txt">
          Lorem ipsum dolor sit amet ea no aliquyam eirmod rebum.aliquyam irmod
          rebum.aliquyam eirmod rebum.
        </p>
        <h5 className="fw_xxbold">Order Delivery</h5>
      </div>
    </div>
  );
}
