import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home';

import Singing from './singing';
import Spanish from './spanish';
import Journaling from './journaling';
import Drums from './drums';

const router = createBrowserRouter([
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
  },
  {
    path: "drums",
    element: <Drums />
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
