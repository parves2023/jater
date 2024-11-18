import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import LetLearnPage from "../pages/LetLearnPage";
import Lessons from "../pages/Lesons";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import About from "../components/About";


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
                element: <About></About>
            }
        ]
    }    
]);

export default router;