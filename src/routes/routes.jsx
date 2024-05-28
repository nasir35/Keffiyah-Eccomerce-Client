import { createBrowserRouter, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Products from "../pages/Products/Products";
import DashboardLayout from "../layouts/DashboardLayout";
import Orders from "../components/Dashboard/Orders";
import ProductCharts from "../components/Dashboard/ProductCharts";
import PrivateRoute from "./PrivateRoute";
import NumberParamRoute from "./NumberParamRoute";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products page={1} />,
          },
          {
            path: ":pageNo",
            element: (
              <NumberParamRoute>
                <Products />
              </NumberParamRoute>
            ),
          },
        ],
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <ProductCharts />,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);
