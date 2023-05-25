import React from "react";
import renderer from "react-test-renderer";
import store from "../redux/store";
import Countries from "../components/Countries";
import { Provider } from "react-redux";


describe('Test Rockets component', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <Countries />
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });