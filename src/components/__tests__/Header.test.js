import { render } from "@testing-library/react";
import Header from "../Header.jsx";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import { StaticRouter } from "react-router-dom/server.js";

test("Logo Should load on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(
    "https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
  );
});

test("online status in working on load of header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const status = header.getByTestId("online-status");

  expect(status.innerHTML).toBe("🟢");
});

test("cart is 0 on load of header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0");
});
