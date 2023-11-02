import logo from "../Assets/Logo .svg";
import { Nav } from "./Nav";
export function Header() {
  return (
    <header className="header_class">
      <img src={logo} alt="restaurant " />
      <Nav></Nav>
    </header>
  );
}
