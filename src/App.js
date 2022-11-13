import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home';

import Singing from './Singing';

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
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
