import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import LetLearnPage from "../pages/LetLearnPage";
import Lessons from "../pages/Lesons";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import About from "../components/About";
import { div, path } from "framer-motion/client";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Tutorial from "../components/Tutorial";
import AboutUs from "../pages/Aboutus";
import NotFound from "../components/NotFound";
import ForgotPass from "../components/ForgotPass";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                loader: () => fetch('/words.json')
            }, 
            {
                path: '/start-learning',
                element: <LetLearnPage></LetLearnPage>
            },
            {
                path: '/lessons/:id',
                element: <PrivateRoute><Lessons></Lessons></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
           {
            path: '/my-profile',
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
           },
           {
            path: '/update-profile',
           element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>

           },
           {
            path: '/tutorials',
           element: <PrivateRoute><Tutorial></Tutorial></PrivateRoute>
           },
           {
            path: '/forgotpass',
            element: <ForgotPass></ForgotPass>
           }
            
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }  
]);

export default router;