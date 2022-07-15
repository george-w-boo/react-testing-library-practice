import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("btn has correct initial color and toggles color", () => {
  render(<App />);
  const colorToggleBtn = screen.getByRole("button", { name: "Change to blue" });

  expect(colorToggleBtn).toHaveStyle("background-color: red");

  fireEvent.click(colorToggleBtn);

  expect(colorToggleBtn).toHaveStyle({ backgroundColor: "blue" });
  expect(colorToggleBtn.textContent).toBe("Change to red");

  fireEvent.click(colorToggleBtn);

  expect(colorToggleBtn).toHaveStyle({ backgroundColor: "red" });
  expect(colorToggleBtn.textContent).toBe("Change to blue");
});
