import { Link, useLocation } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";

const LinksModal = ({ show, setShow }) => {
  const links = document.querySelectorAll("li");
  links.forEach((l) => {
    l.addEventListener("click", () => setShow(false));
  });
  return (
    <div className={`fixed inset-0 z-50 ${show ? "block" : "hidden"}`}>
      <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
      <div
        className={`bg-white absolute top-0 ${
          show ? "left-0 opacity-100" : "left-[150%] opacity-0"
        } transition-all duration-300 h-full z-50 w-full p-4 overflow-y-auto`}
      >
        <ul className="flex flex-col gap-3">
          <li>
            <Link to="/" className="text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" className="text-gray-800">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-800">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="text-gray-800">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-800">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-gray-800">
              Register
            </Link>
          </li>
        </ul>
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [focused, setFocused] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (showLinks) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLinks]);

  const getLinkClass = (path) => {
    if (path === "/" && path === location.pathname) {
      return "font-mono text-gray-800 font-medium uppercase border-b-2 border-indigo-500";
    } else if (path === "/" && path !== location.pathname) {
      return "font-mono text-gray-800 font-medium uppercase";
    } else {
      return location.pathname.includes(path)
        ? "font-mono text-gray-800 font-medium uppercase border-b-2 border-indigo-500"
        : "font-mono text-gray-800 font-medium uppercase";
    }
  };

  return (
    <div className="navbar sticky top-0 z-10 opacity-100 bg-base-200 flex justify-between flex-wrap">
      {/* logo  */}
      <div className="flex">
        <button
          className="btn px-2 btn-ghost text-xl lg:hidden" // Hide button on large screens
          onClick={() => setShowLinks(!showLinks)} // Toggle visibility of links modal
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <Link to="/" className="btn px-2 btn-ghost text-xl">
          Keffiyeh
        </Link>
      </div>
      {/* links */}
      <div className="lg:flex hidden">
        <ul className="flex gap-5 items-center flex-wrap">
          <li className={getLinkClass("/")}>
            <Link to="/">Home</Link>
          </li>
          <li className={getLinkClass("/categories")}>
            <Link to="/categories">Categories</Link>
          </li>
          <li className={getLinkClass("/products")}>
            <Link to="/products">Products</Link>
          </li>
          {user && (
            <li className={getLinkClass("/dashboard")}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li className={getLinkClass("/contact-us")}>
            <Link to="/contact-us">Contact-Us</Link>
          </li>
          {!user && (
            <li className={getLinkClass("/login")}>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li className={getLinkClass("/register")}>
              <Link to="/register">Register</Link>
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
            className="pr-2 outline-none focus:outline-none h-8 bg-base-200"
            placeholder="Search.."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <button className="search-btn">
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
                  alt="User avatar"
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
        <LinksModal show={showLinks} setShow={setShowLinks} />
      </div>
    </div>
  );
};

export default Navbar;
