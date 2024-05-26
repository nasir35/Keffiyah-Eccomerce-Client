import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import DashboardLayout from "../layouts/DashboardLayout";
import Orders from "../components/Dashboard/Orders";
import Dashboard from "../pages/Dashboard";
import TempLayout from "@/layouts/TempLayout";
import ProductCharts from "../components/Dashboard/ProductCharts";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

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
        element: <Products></Products>,
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
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
    ],
  },
  {
    path: "temp",
    element: <TempLayout />,
    children: [
      {
        path: "",
        element: <ProductCharts></ProductCharts>,
      },
    ],
  },
  {
    path: "/loading",
    element: <LoadingSpinner />,
  },
]);
