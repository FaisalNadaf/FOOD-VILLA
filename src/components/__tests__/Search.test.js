import { render, waitFor } from "@testing-library/react";
import { MOCK_FETCH } from "../../constant";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_FETCH);
    },
  });
});

test("search test ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-input"));
  });

  const resturantList = body.getByTestId("resturant-list");
    expect(resturantList.length).tobe(99);
});
