import Header from "./components/Header";
import Body from "./components/Body";
import Buy from "./components/Buy";
import { data } from "./constant.js";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import Cart from "./components/Cart.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

const d = window.location.pathname;
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/buy/:id",
        element: <Buy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
