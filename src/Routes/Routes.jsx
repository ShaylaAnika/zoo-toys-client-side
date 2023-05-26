import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: 'alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: 'addtoys',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute> 
        },
        {
            path: 'mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute> 
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'updatetoy/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`https://assignment11-animal-toys-server-side.vercel.app/toys/${params.id}`)
        },
        {
            path: 'toydetails/:id',
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute> ,
            loader: ({params}) => fetch(`https://assignment11-animal-toys-server-side.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router