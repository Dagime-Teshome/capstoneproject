import "./App.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Main } from "./Main/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container_class">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Outlet />
    </div>
  );
}

export default App;
