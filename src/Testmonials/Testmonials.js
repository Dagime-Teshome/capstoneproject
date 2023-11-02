import { TestimonialsCard } from "./TestmonialCard/TestmonialCard";
import css from "./Testmonials.css";

export function Testimonials() {
  return (
    <div className="Testimonials bg_primary_gr">
      <h2 className="light_txt subTitle">Testimonials</h2>
      <div className="testimonial_container">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </div>
  );
}
