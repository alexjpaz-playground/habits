import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import Singing from './singing';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="singing">Singing</Link>
      </div>
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
