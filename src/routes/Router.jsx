import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import ErrorPage from './../pages/ErrorPage';
import Home from "../pages/main/Home";
import AllBios from './../pages/main/AllBios';
import Login from "../pages/main/Login";
import SignUp from "../pages/main/SignUp";
import Details from "../pages/main/Details";
import Dashboard from "../layouts/Dashboard";
import Edit from "../pages/user dashboard/Edit";
import View from '../pages/user dashboard/View';
import MyContactRequest from "../pages/user dashboard/MyContactRequest";
import MyFavorite from "../pages/user dashboard/MyFavorite";
import AdminDashboard from "../pages/admin dashboard/AdminDashboard";
import ManageUsers from "../pages/admin dashboard/ManageUsers";
import ApprovedPremiumRequest from "../pages/admin dashboard/ApprovedPremiumRequest";
import ApprovedContactRequest from "../pages/admin dashboard/ApprovedContactRequest";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/allBios',
                element: <AllBios></AllBios>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/details/1',
                element: <Details></Details>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/admin-dashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'edit',
                element: <Edit></Edit>
            },
            {
                path: 'view',
                element: <View></View>
            },
            {
                path: 'my-contact-request',
                element: <MyContactRequest></MyContactRequest>
            },
            {
                path: 'my-favorite',
                element: <MyFavorite></MyFavorite>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'approved-premium',
                element: <ApprovedPremiumRequest></ApprovedPremiumRequest>
            },
            {
                path: 'approved-contact-request',
                element: <ApprovedContactRequest></ApprovedContactRequest>
            }
        ]
    }
])


export default routes