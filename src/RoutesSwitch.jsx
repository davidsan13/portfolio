
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  // {
  //   path: "/AboutMe",
  //   element: <AboutMe/>
  // }
])

