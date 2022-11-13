import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home';

import Singing from './singing';
import Spanish from './spanish';

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
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
