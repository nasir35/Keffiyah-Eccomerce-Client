import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Products from "../pages/Products/Products";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductCharts from "../components/Dashboard/ProductCharts";
import PrivateRoute from "./PrivateRoute";
import NumberParamRoute from "./NumberParamRoute";
import ContactUs from "../pages/ContactUs";
import CategoryBasedProducts from "../pages/Products/CategoryBasedProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllProducts from "../pages/Dashboard/AllProducts";
import ProductDetails from "../pages/Products/ProductDetails";
import ProfilePage from "../pages/ProfilePage";
import EditProductPage from "../pages/Dashboard/EditProductPage";

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
          {
            path: "category/:categoryId",
            element: <CategoryBasedProducts />,
          },
          {
            path: "product-details/:product_id",
            element: <ProductDetails />,
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
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
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
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
        loader: async () => {
          return await fetch("http://localhost:3000/products");
        },
      },
      {
        path: "product-edit/:id",
        element: <EditProductPage />,
      },
    ],
  },
]);
