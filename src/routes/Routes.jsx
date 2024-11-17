import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import LetLearnPage from "../pages/LetLearnPage";


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
            {
                path: '/start-learning',
                element: <LetLearnPage></LetLearnPage>
            }, 
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // }
        ]
    }    
]);

export default router;