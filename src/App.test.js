import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./Reservations/BookingForm";
import { initializeTimes, updateTimes } from "./Reservations/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Initialize Function Test", () => {
  const result = initializeTimes();
  expect(result).toEqual([]);
});
test("Update Function Test", () => {
  const state = [1, 2, 3];
  const action = { type: "SOME_ACTION", payload: "some data" };
  const result = updateTimes(state, action);
  // Assert
  expect(result).toEqual(state);
});
