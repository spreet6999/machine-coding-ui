import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import style from "./style.module.css";

function TopBottom() {
  return (
    <section className={style.topBottomLayoutContainer}>
      <AppBar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default TopBottom;
