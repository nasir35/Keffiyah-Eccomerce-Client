import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faUser,
  faTags,
  faUsersCog,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="flex h-screen overflow-y-hidden">
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <div className="text-2xl font-bold mb-4">Keffiyah</div>
        <nav className="flex-1">
          <ul>
            <li className="mb-4">
              <Link to="" className="flex items-center">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="all-products" className="flex items-center">
                <FontAwesomeIcon icon={faBox} className="mr-2" />
                All Products
              </Link>
            </li>
            <li className="mb-4">
              <Link to="add-product" className="flex items-center">
                <FontAwesomeIcon icon={faTags} className="mr-2" />
                Add Product
              </Link>
            </li>
            <li className="mb-4">
              <Link to="add-categories" className="flex items-center">
                <FontAwesomeIcon icon={faTags} className="mr-2" />
                Add Categories
              </Link>
            </li>
            {/* <li className="mb-4">
              <Link to="users" className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Users
              </Link>
            </li>
            <li className="mb-4">
              <Link to="admins" className="flex items-center">
                <FontAwesomeIcon icon={faUsersCog} className="mr-2" />
                Admins
              </Link>
            </li> */}
            <li className="mb-4">
              <Link to="summary-report" className="flex items-center">
                <FontAwesomeIcon icon={faChartPie} className="mr-2" />
                Summary Report
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <a href="/" className="text-orange-500">
            Back to Home
          </a>
        </div>
      </aside>

      <div className="flex flex-col flex-1 overflow-y-hidden">
        <header className="flex items-center justify-between px-4 py-1 bg-gray-100 border-b border-gray-300 shadow-lg">
          <div className="text-xl font-semibold text-orange-500">
            Dashboard Panel
          </div>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </header>
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
