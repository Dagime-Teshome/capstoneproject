import img from "../Assets/Mario and Adrian b.jpg";
import "./Footer.css";
export function Footer() {
  return (
    <footer className="bg_primary_gr">
      <div className="footer_Wrapper">
        <img src={img} alt="some text" />
        <div className="footer_Sec dorm_nav">
          <h3 className="sectionTitle  fw_xbold dark_txt">
            Dormant Navigation
          </h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer_Sec cont_nav">
          <h3 className="sectionTitle fw_xbold dark_txt">Contact</h3>
          <ul>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
          </ul>
        </div>
        <div className="footer_Sec social_nav">
          <h3 className="sectionTitle fw_xbold dark_txt">Social Media Link</h3>
          <ul>
            <li>
              <a href="#">insta</a>
            </li>
            <li>
              <a href="#">insta</a>
            </li>
            <li>
              <a href="#">insta</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
