import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// our Tests

// Write a test that checks if
// the list Items have fruits
// of length greater than 3

test("renders 3 fruits as list Items", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBeGreaterThanOrEqual(4);
});

// check for heading

test("check for heading", () => {
  render(<App />);
  const heading = screen.getByTestId("heading1");
  expect(heading).toBeInTheDocument();
});

// check for the correct sum

test("check for the sum to be 5", () => {
  render(<App />);
  const span = screen.getByTestId("span1");
  expect(span.textContent).toBe('5')
});


