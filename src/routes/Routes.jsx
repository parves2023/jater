import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import LetLearnPage from "../pages/LetLearnPage";
import Lessons from "../pages/Lesons";


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
            //     path: '/lesons/:id', 
            //     element: <PrivateRoute><News></News></PrivateRoute>
            // },
            {
                path: '/start-learning',
                element: <LetLearnPage></LetLearnPage>
            },
            {
                path: '/lessons/:id',
                element: <Lessons></Lessons>
            }
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // }
        ]
    }    
]);

export default router;