import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


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
            // {
            //     path: '/news/:id', 
            //     element: <PrivateRoute><News></News></PrivateRoute>
            // },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // }, 
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // }
        ]
    }    
]);

export default router;