import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
  render(<App />);
  const linkElement = screen.getByText("This is the home page");
  expect(linkElement).toBeInTheDocument();
});
