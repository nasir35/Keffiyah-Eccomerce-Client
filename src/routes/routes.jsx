import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Products from "../pages/Products/Products";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import NumberParamRoute from "./NumberParamRoute";
import ContactUs from "../pages/ContactUs";
import CategoryBasedProducts from "../pages/Products/CategoryBasedProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllProducts from "../pages/Dashboard/AllProducts";
import ProductDetails from "../pages/Products/ProductDetails";
import ProfilePage from "../pages/ProfilePage";
import EditProductPage from "../pages/Dashboard/EditProductPage";
import AddCategory from "../pages/Dashboard/AddCategory";
import AllCategory from "../pages/Dashboard/AllCategory";
import SummaryReport from "../pages/Dashboard/SummaryReport";
import SearchBar from "../components/SearchBar";

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
        element: <SummaryReport />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
        loader: async () => {
          return await fetch("http://localhost:3000/products");
        },
      },
      {
        path: "all-categories",
        element: <AllCategory />,
        loader: async () => {
          return await fetch("http://localhost:3000/categories");
        },
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "summary-report",
        element: <SummaryReport />,
      },
      {
        path: "product-edit/:id",
        element: <EditProductPage />,
      },
    ],
  },
  {
    path: "/t",
    element: <SearchBar />,
  },
]);
