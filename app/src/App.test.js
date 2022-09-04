import { render } from '@testing-library/react';
import * as React from 'react';
import App from './App';

describe('App', () => {
  // TODO: mock api call here when we extract it to a service

  const defaultProps = {
    // TODO: add default props
  };

  function setup(props) {
    return render(<App />, {
      ...defaultProps,
      ...props,
    })
  }

  describe('@renders', () => {
    test('search bar', () => {
      const wrapper = setup();

      const searchBar = wrapper.getByTestId('inp-summoner-serach');

      expect(searchBar).toBeInTheDocument();
    });

    test('search button', () => {
      const wrapper = setup();

      const searchButton = wrapper.getByTestId('btn-summoner-serach');
      // TODO: once the api is extracted/mocked we need to click this button and expect it to have been called

      expect(searchButton).toBeInTheDocument();
    });

    test('no matches found', () => {
      const wrapper = setup();

      const noMatchesFound = wrapper.getByTestId('no-matches-found');

      expect(noMatchesFound).toBeInTheDocument();
    });

    test('table', () => {
      const wrapper = setup();
      // TODO: stub the api so the table can be populated

      // TODO: locate table
      // TODO: expect table to have some elements
    });
  });
});
