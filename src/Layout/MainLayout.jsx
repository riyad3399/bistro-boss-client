import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes('signup');
  console.log(noHeaderFooter);
  return (
    <div>
     { noHeaderFooter || <NavBar></NavBar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
     { noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
