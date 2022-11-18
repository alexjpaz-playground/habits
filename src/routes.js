import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Singing from './singing';
import Spanish from './spanish';
import Journaling from './journaling';

export const routerData = [
    {
        path: "/",
        element: (
            <Home />
        ),
    },
    {
        path: "singing",
        element: <Singing />,
    },
    {
        path: "spanish",
        element: <Spanish />,
    },
    {
        path: "journaling",
        element: <Journaling />,
    }
]

export const router = createBrowserRouter(routerData);