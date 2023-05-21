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
import TabDetails from '../pages/TabDetails/TabDetails';
import PrivateRoute from './PrivateRoute';

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
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
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
                path: 'terms',
                element: <Terms></Terms>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><TabDetails></TabDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }

])


export default router;