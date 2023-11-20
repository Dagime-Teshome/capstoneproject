import "./Header.css";
import { Link } from "react-router-dom";
import menuIcon from "../Assets/icon _hamburger menu_.svg.svg";
import homeIcon from "../Assets/home icon.svg";
import { useRef, useState } from "react";
export function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const nav_ul = useRef(null);
  let toggleMenu = () => {
    setIsClicked(!isClicked);
    nav_ul.current.toggleAttribute("data-visible");
  };
  return (
    <div className="navContainer">
      <button className="nav_toggle_btn" onClick={toggleMenu}>
        <img className="icon-menu" src={menuIcon}></img>
        <img className="icon-home" src={homeIcon}></img>
        <span className="visually-hidden">Menu</span>
      </button>
      <nav>
        <ul ref={nav_ul} className=" primary_nav dark_txt sectionTitle">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="#aboutSection">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <Link to={"/reservations"}>Reservations</Link>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
