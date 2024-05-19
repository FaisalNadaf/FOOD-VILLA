import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body.jsx";
import Shimmerui from "../Shimmerui";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import { StaticRouter } from "react-router-dom/server.js";
import { MOCK_FETCH } from "../../constant.js";

test("Shimmerui loaging", () => {

  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_FETCH);
      },
    });
  });

  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const Shimmer = body.getByTestId("shimmer");
    expect(Shimmer.children.length).toBe(12);
});
