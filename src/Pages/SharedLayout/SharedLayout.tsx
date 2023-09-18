import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
