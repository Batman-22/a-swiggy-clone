import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('should render Navigate component', () => {
    render(<App />);
    const navigateElement = screen.getByTestId('navigate');
    expect(navigateElement).toBeInTheDocument();
  });

  test('should render OffersBanner component', () => {
    render(<App />);
    const offersBannerElement = screen.getByTestId('offers-banner');
    expect(offersBannerElement).toBeInTheDocument();
  });

  test('should render RestaurentChain component', () => {
    render(<App />);
    const restaurentChainElement = screen.getByTestId('restaurent-chain');
    expect(restaurentChainElement).toBeInTheDocument();
  });

  test('should render RestaurentOnline component', () => {
    render(<App />);
    const restaurentOnlineElement = screen.getByTestId('restaurent-online');
    expect(restaurentOnlineElement).toBeInTheDocument();
  });

  test('should render BestRest component', () => {
    render(<App />);
    const bestRestElement = screen.getByTestId('best-rest');
    expect(bestRestElement).toBeInTheDocument();
  });

  test('should render Footer component', () => {
    render(<App />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});

