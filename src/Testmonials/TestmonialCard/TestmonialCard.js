import goldStar from "../../Assets/star.png";
import BlackStar from "../../Assets/black.png";
import user1 from "../../Assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import user2 from "../../Assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import css from "./TestmonialCard.css";
export function TestimonialsCard() {
  return (
    <div className="testimonial_card">
      <div className="rating_wrapper">
        <img src={user2}></img>
        <div className="name_review_class">
          <h3>James Bond</h3>
          <div className="rating_class">
            <img className="rating_img" src={goldStar}></img>
            <img className="rating_img" src={BlackStar}></img>
            <img className="rating_img" src={BlackStar}></img>
            <img className="rating_img" src={BlackStar}></img>
          </div>
        </div>
      </div>
      <p className="dark_txt card_description">
        "Absolutely delighted! 5 stars"
      </p>
    </div>
  );
}
