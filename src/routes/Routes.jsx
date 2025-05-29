import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import LetLearnPage from "../pages/LetLearnPage";
import Lessons from "../pages/Lesons";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Tutorial from "../components/Tutorial";
import AboutUs from "../pages/Aboutus";
import NotFound from "../components/NotFound";
import ForgotPass from "../components/ForgotPass";
import Checkemail from "../components/Checkemail";
import ResetPassword from "../components/ResetPassword";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home />, loader: () => fetch('/words.json') },
      { path: '/start-learning', element: <LetLearnPage /> },
      { path: '/lessons/:id', element: <PrivateRoute><Lessons /></PrivateRoute> },
      { path: '/register', element: <Register /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/my-profile', element: <PrivateRoute><MyProfile /></PrivateRoute> },
      { path: '/update-profile', element: <PrivateRoute><UpdateProfile /></PrivateRoute> },
      { path: '/tutorials', element: <PrivateRoute><Tutorial /></PrivateRoute> },
    ]
  },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <Login /> },
  { path: '/forgotpass', element: <ForgotPass /> },
  { path: '/checkemail', element: <Checkemail /> },
  { path: '/reset-password', element: <ResetPassword /> },

  // Dashboard routes
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'statistics', element: <DashboardHome /> },
      { path: 'user-info', element: <div>user info</div> },
      { path: 'subscription', element: <div>user subscription</div> },
      { path: 'settings', element: <div>settings</div> }
    ]
  }
]);

export default router;