import { render, screen } from '@testing-library/react';
import App from './App';
import { getByText } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render semantic ui button', () => {
  const {container, getByText} = render(<App />);
  expect(getByText("Click Me!")).toBeInTheDocument();
})
