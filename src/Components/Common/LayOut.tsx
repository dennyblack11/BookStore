import { Outlet } from "react-router-dom";
import Header from "../Static/Header";
import Footer from "../Static/Footer";

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
