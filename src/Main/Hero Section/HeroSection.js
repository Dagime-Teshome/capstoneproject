import "./HeroSection.css";
import foodImage from "../../Assets/restauranfood.jpg";

export function HeroSection() {
  return (
    <div className="heroSec_wrapper bg_primary_gr">
      <div className="hero_description">
        <h1 className="primary_txt displayTitle fw_semibold">Little Lemon</h1>
        <h1 className="subTitle light_txt">Chicago</h1>
        <p className="light_txt ">
          Lorem ipsum dolor sit amet ea no aliquyam eirmod rebum.aliquyam eirmod
          rebum.aliquyam eirmod rebum.
        </p>
        <button className="btn_class bg_primary_yel dark_txt fw_xxbold">
          Reserve A Table
        </button>
      </div>

      <div className="hero_image">
        <img src={foodImage} alt="picture_of_food"></img>
      </div>
    </div>
  );
}
