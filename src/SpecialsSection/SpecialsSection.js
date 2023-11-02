import { CardComponent } from "./CardComponent/CardComponent";
import css from "./SpecialsSection.css";
export function SpecialsSection() {
  return (
    <div className="Specials_wrapper">
      <div className="specials_header">
        <h2 className="dark_txt displayTitle fw_semibold">
          This weeks special !
        </h2>
        <button className="btn_class bg_primary_yel dark_txt fw_xxbold">
          Online Menu
        </button>
      </div>
      <div className="card_container">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
