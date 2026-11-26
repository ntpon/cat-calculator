import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

function convert(years, months, toCat = false) {
  if (toCat) {
    const direction = screen.getByRole("combobox");
    fireEvent.keyDown(direction, { key: "ArrowDown" });
    userEvent.click(screen.getByText("Age Human To Cat"));
  }
  fireEvent.change(screen.getByPlaceholderText("Year"), { target: { value: years } });
  fireEvent.change(screen.getByPlaceholderText("Month"), { target: { value: months } });
  userEvent.click(screen.getByRole("button", { name: "Convert" }));
}

test.each([
  [0, 6, "10 Y"],
  [1, 0, "15 Y"],
  [1, 6, "19 Y 6 M"],
  [2, 0, "24 Y"],
  [3, 0, "28 Y"],
])("converts %i cat years and %i months to %s", (years, months, expected) => {
  render(<App />);
  convert(years, months);
  expect(screen.getByText(`Age of human is ${expected}`)).toBeTruthy();
});

test.each([
  [0, 0, "0 Y"],
  [10, 0, "6 M"],
  [15, 0, "1 Y"],
  [19, 6, "1 Y 6 M"],
  [24, 0, "2 Y"],
  [28, 0, "3 Y"],
])("converts %i human years and %i months to %s", (years, months, expected) => {
  render(<App />);
  convert(years, months, true);
  expect(screen.getByText(`Age of cat is ${expected}`)).toBeTruthy();
});

test("clears the inputs and result on reset", () => {
  render(<App />);
  convert(2, 0);
  userEvent.click(screen.getByRole("button", { name: "Reset" }));
  expect(screen.getByPlaceholderText("Year").value).toBe("");
  expect(screen.getByText("Please Enter Age Cat / Human")).toBeTruthy();
});
