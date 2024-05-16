import Header from "./components/Header";
import Body from "./components/Body";
import Buy from "./components/Buy";
import { data } from "./constant.js";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import AboutUs from "./components/AboutUs.jsx";
import Cart from "./components/Cart.jsx";
import React, { Suspense, createContext, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./hooks/UserContext.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import Offers from "./components/Offers.jsx";

const Offers = lazy(() => import("./components/Offers.jsx")); //this is called as lazy loding
const AboutUs = lazy(() => import("./components/AboutUs.jsx")); //this is called as lazy loding

const App = () => {
  const [user, setUser] = useState({
    name: "demo",
    email: "demo.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
