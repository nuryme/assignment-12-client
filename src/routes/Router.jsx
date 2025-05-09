import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import ErrorPage from "./../pages/ErrorPage";
import Home from "../pages/main/Home";
import AllBios from "./../pages/main/AllBios";
import Login from "../pages/main/Login";
import SignUp from "../pages/main/SignUp";
import Details from "../pages/main/Details";
import Dashboard from "../layouts/Dashboard";
import Edit from "../pages/user dashboard/Edit";
import View from "../pages/user dashboard/View";
import MyContactRequest from "../pages/user dashboard/MyContactRequest";
import MyFavorite from "../pages/user dashboard/MyFavorite";
import AdminDashboard from "../pages/admin dashboard/AdminDashboard";
import ManageUsers from "../pages/admin dashboard/ManageUsers";
import ApprovedPremiumRequest from "../pages/admin dashboard/ApprovedPremiumRequest";
import ApprovedContactRequest from "../pages/admin dashboard/ApprovedContactRequest";
import PrivateRouter from "./PrivateRouter";
import CheckOut from "../pages/main/CheckOut";
import Profile from "../pages/Profile";
import AdminRouter from "./AdminRouter";
import Married from "../pages/user dashboard/Married";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBios",
        element: <AllBios></AllBios>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      //admin routes
      {
        path: "/dashboard/admin-dashboard",
        element: (
          <AdminRouter>
            <AdminDashboard></AdminDashboard>
          </AdminRouter>
        ),
      },
      {
        path: "manage-users",
        element: <AdminRouter><ManageUsers></ManageUsers></AdminRouter>,
      },
      {
        path: "approved-premium",
        element: <AdminRouter><ApprovedPremiumRequest></ApprovedPremiumRequest></AdminRouter>,
      },
      {
        path: "approved-contact-request",
        element: <AdminRouter><ApprovedContactRequest></ApprovedContactRequest></AdminRouter>,
      },

      //user routes
      {
        path: "edit",
        element: (
          <PrivateRouter>
            <Edit></Edit>
          </PrivateRouter>
        ),
      },
      {
        path: "view",
        element: <PrivateRouter><View></View></PrivateRouter>,
      },
      {
        path: "married",
        element: <PrivateRouter><Married></Married></PrivateRouter>,
      },
      {
        path: "my-contact-request",
        element: <PrivateRouter><MyContactRequest></MyContactRequest></PrivateRouter>,
      },
      {
        path: "my-favorite",
        element: <PrivateRouter><MyFavorite></MyFavorite></PrivateRouter>,
      },

      {
        path: "profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>,
      },
    ],
  },
]);

export default routes;
