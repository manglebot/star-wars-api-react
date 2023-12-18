import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Star Wars Character title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars Character/i);
  expect(linkElement).toBeInTheDocument();
});
