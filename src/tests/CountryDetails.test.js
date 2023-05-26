import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountryDetails from '../components/CountryDetails';

describe('Test Country details component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CountryDetails />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
