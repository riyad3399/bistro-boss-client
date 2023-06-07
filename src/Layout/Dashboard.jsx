import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [, cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-orange-400">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome size={22}></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additem">
                    <FaUtensils size={22}></FaUtensils> Add an Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageitems">
                    <TfiMenuAlt size={22}></TfiMenuAlt> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook size={22}></FaBook> Manage Bookings (not implemented)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers size={22}></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome size={22}></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservations">
                    <FaCalendarAlt size={22}></FaCalendarAlt> Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet size={22}></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart size={22}></FaShoppingCart> My Cart
                    <span className="badge badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome size={22}></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="menu">
                <FiMenu size={22}></FiMenu> Our Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
