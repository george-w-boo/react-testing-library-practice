import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "jest-styled-components";

test("btn has correct initial color and toggles color", () => {
  render(<App />);
  const colorToggleBtn = screen.getByRole("button", { name: "Change to blue" });

  expect(colorToggleBtn).toHaveStyleRule("background-color", "red");

  fireEvent.click(colorToggleBtn);
  expect(colorToggleBtn).toHaveStyle({ backgroundColor: "blue" });
  expect(colorToggleBtn.textContent).toBe("Change to red");

  fireEvent.click(colorToggleBtn);
  expect(colorToggleBtn).toHaveStyle({ backgroundColor: "red" });
  expect(colorToggleBtn.textContent).toBe("Change to blue");
});

test("initial conditions", () => {
  render(<App />);
  const colorToggleBtn = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Toggle btn ability" });

  expect(colorToggleBtn).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});

test("checkbox functionality", () => {
  render(<App />);
  const colorToggleBtn = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Toggle btn ability" });

  fireEvent.click(checkBox);
  expect(colorToggleBtn).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorToggleBtn).toBeEnabled();
});
