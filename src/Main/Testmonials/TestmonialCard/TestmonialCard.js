import goldStar from "../../../Assets/star.png";
import BlackStar from "../../../Assets/black.png";
import user2 from "../../../Assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import "./TestmonialCard.css";
export function TestimonialsCard() {
  return (
    <div className="testimonial_card">
      <div className="rating_wrapper">
        <img alt=" " src={user2}></img>
        <div className="name_review_class">
          <h3>James Bond</h3>
          <div className="rating_class">
            <img alt=" " className="rating_img" src={goldStar}></img>
            <img alt=" " className="rating_img" src={BlackStar}></img>
            <img alt=" " className="rating_img" src={BlackStar}></img>
            <img alt=" " className="rating_img" src={BlackStar}></img>
          </div>
        </div>
      </div>
      <p className="dark_txt card_description">
        "Absolutely delighted! 5 stars"
      </p>
    </div>
  );
}
