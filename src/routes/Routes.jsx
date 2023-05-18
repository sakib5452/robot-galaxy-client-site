import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/Main/MainLayout';
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddToy from '../pages/AddToy/AddToy';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import Terms from '../pages/Terms/Terms';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>
            },
            {
                path: "/addToys",
                element: <AddToy></AddToy>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/singIn",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }, {
                path: 'terms',
                element: <Terms></Terms>
            },
        ]
    }

])


export default router;