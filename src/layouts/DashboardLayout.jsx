import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-700 text-white flex flex-col justify-between p-4">
        <nav>
          <div className="w-64 text-2xl font-bold py-4">Keffiyah</div>
          <ul>
            <li className="mb-4">
              <Link to={""}>Dashboard</Link>
            </li>
            <li className="mb-4">
              <Link to="orders">Orders</Link>
            </li>
            <li className="mb-4">Add Product</li>
            <li className="mb-4">Add Categories</li>
            <li className="mb-4">Users</li>
            <li className="mb-4">Admins</li>
          </ul>
        </nav>
        <div>
          <a href="/" className="text-orange-500">
            Back to Home
          </a>
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="flex items-center  p-4 bg-gray-100">
          <div className="flex-1 text-xl font-semibold text-orange-500">
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
        </header>

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
