import Header from "./components/Header";
import Body from "./components/Body";
import Buy from "./components/Buy";
import { data } from "./constant.js";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import AboutUs from "./components/AboutUs.jsx";
import Cart from "./components/Cart.jsx";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import Offers from "./components/Offers.jsx";

const Offers = lazy(() => import("./components/Offers.jsx")); //this is called as lazy loding
const AboutUs = lazy(() => import("./components/AboutUs.jsx")); //this is called as lazy loding

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
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
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
      {
        path: "/offers",
        element: (
          <Suspense>
            <Offers />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
