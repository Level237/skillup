import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Homepage/>
    },{
        path:'/login',
        element:<Login/>
    }

])