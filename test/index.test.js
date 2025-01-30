import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

describe('Index Component', () => {
  test('should render App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);  // Render the App component into the div element
    ReactDOM.unmountComponentAtNode(div);  // Clean up
  });
});

