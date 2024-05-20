import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import { StaticRouter } from "react-router-dom/server.js";
import Footer from "../Footer.jsx";

test("online status in working on load of header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

  const author = header.getByTestId("author");

  expect(author.innerHTML).toBe("code by Faisal");
});
