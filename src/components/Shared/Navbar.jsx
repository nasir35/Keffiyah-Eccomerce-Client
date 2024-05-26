import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [focused, setFocused] = useState(false);
  return (
    <div className="navbar bg-base-200 flex justify-between">
      {/* logo  */}
      <div className="flex">
        <a className="btn btn-ghost text-xl">Keffiyeh</a>
      </div>
      {/* links */}
      <div>
        <ul className="flex gap-5 items-center">
          <li className="font-mono text-gray-800 font-medium uppercase">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-mono text-gray-800 font-medium uppercase">
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li className="font-mono text-gray-800 font-medium uppercase">
            <Link to={"/products"}>Products</Link>
          </li>
          {user && (
            <li className="font-mono text-gray-800 font-medium uppercase">
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
          <li className="font-mono text-gray-800 font-medium uppercase">
            <Link to={"/contact-us"}>Contact-Us</Link>
          </li>
          {!user && (
            <li className="font-mono text-gray-800 font-medium uppercase">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
          {!user && (
            <li className="font-mono text-gray-800 font-medium uppercase">
              <Link to={"/register"}>Register</Link>
            </li>
          )}
        </ul>
      </div>
      {/* nav end  */}
      <div className="flex-none gap-2 px-2">
        <div
          className={`flex items-center border-2 rounded-md ${
            focused ? "border-indigo-500" : "border-gray-300"
          } px-3`}
        >
          <input
            type="text"
            name=""
            className="pr-2 outline-none focus:outline-none h-8 bg-base-200"
            id="search-propmt"
            placeholder="Search.."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <button className="search-btn " id="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge border-orange-600 badge-sm indicator-item">
                8
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
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
                  alt="Tailwind CSS Navbar component"
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
      </div>
    </div>
  );
};

export default Navbar;
