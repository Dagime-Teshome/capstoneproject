import "./AboutSection.css";
import res1 from "../../Assets/restaurant.jpg";
import res2 from "../../Assets/restaurant chef B.jpg";
export function AboutSection() {
  return (
    <div id="aboutSection" className="About">
      <div className="about_desc_wrapper">
        <span>
          <h1 className="primary_txt displayTitle fw_semibold">Little Lemon</h1>
          <h1 className="subTitle highLight_txt">Chicago</h1>
        </span>
        <p className="dark_txt">
          Lorem ipsum dolor sit amet consetetur vero ea justo magna consetetur
          vero ut et erat vero. Accusam commodo at tempor duis dolor. Tempor
          consequat amet erat ipsum dolor dolores aliquyam. Nobis accusam te
          nonumy amet erat in clita suscipit et sit et nonumy nostrud sed stet
          duo. Dolor vero diam sea eirmod diam no elitr luptatum ipsum lorem
          dolor. Eos dolor et commodo qui odio molestie te elitr sea rebum
          accusam accusam est. Ipsum elitr est duis dolor no consectetuer eos
          rebum. Dolore in aliquyam ipsum dolor te nulla et kasd. Ut et takimata
          possim elitr praesent hendrerit iriure lorem te. Duo sit nonumy iriure
          nulla consetetur consequat eirmod sit sed eos takimata no tempor et
          lobortis placerat.
        </p>
      </div>
      <div className="overLap_wrapper">
        <div className="overLap_images image-stack">
          <div className="image-stack__item--top">
            <img src={res1}></img>
          </div>
          <div className="image-stack__item--bottom">
            <img src={res2}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
