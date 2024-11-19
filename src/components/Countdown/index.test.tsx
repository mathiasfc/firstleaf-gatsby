import React from "react";
import { render, screen, act } from "@testing-library/react";
import Countdown from "./index";

jest.useFakeTimers();

describe("Countdown Component", () => {
  test("renders the label", () => {
    render(<Countdown seconds={300} label="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("displays the correct countdown time", () => {
    render(<Countdown seconds={300} />);
    const counterElement = screen.getByText(/00:05:00/i);
    expect(counterElement).toBeInTheDocument();
  });

  test("counts down to 0", () => {
    render(<Countdown seconds={5} />);
    const counterElement = screen.getByText(/00:00:05/i);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(counterElement).toHaveTextContent("00:00:04");

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(counterElement).toHaveTextContent("00:00:00");
  });

  test("calls onFinish callback when countdown finishes", () => {
    const onFinishMock = jest.fn();
    render(<Countdown seconds={3} onFinish={onFinishMock} />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(onFinishMock).toHaveBeenCalledTimes(1);
  });

  test("restarts countdown when loop is true", () => {
    render(<Countdown seconds={3} loop={true} />);
    const counterElement = screen.getByText(/00:00:03/i);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(counterElement).toHaveTextContent("00:00:00");

    // After the loop, it should restart the countdown
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(counterElement).toHaveTextContent("00:00:03");
  });
});
