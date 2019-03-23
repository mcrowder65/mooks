import React from "react";
import { render, fireEvent } from "react-testing-library";
import useCurrentState from "../useCurrentState";

const tester = (Comp) => {
  const { getByTestId, getByText } = render(<Comp />);

  expect(getByText(/0/i)).toBeInTheDocument();

  fireEvent.click(getByTestId("minus"));

  expect(getByText(/-1/i)).toBeInTheDocument();

  fireEvent.click(getByTestId("plus"));

  expect(getByText(/0/i)).toBeInTheDocument();
};
test("that it works", () => {
  function Comp() {
    const [getCount, setCount] = useCurrentState(0);

    return (
      <div>
        <button
          data-testid="minus"
          onClick={() => setCount((state) => state - 1)}
        >
          Minus
        </button>
        {String(getCount())}
        <button
          data-testid="plus"
          onClick={() => setCount((state) => state + 1)}
        >
          Plus
        </button>
      </div>
    );
  }
  tester(Comp);
});

test("when when initialValue is a function, it invokes it", () => {
  function Comp() {
    const [getCount, setCount] = useCurrentState(() => {
      return 0;
    });

    return (
      <div>
        <button
          data-testid="minus"
          onClick={() => setCount((state) => state - 1)}
        >
          Minus
        </button>
        {String(getCount())}
        <button
          data-testid="plus"
          onClick={() => setCount((state) => state + 1)}
        >
          Plus
        </button>
      </div>
    );
  }
  tester(Comp);
});

test("when not passing a function as the setter, it works", () => {
  function Comp() {
    const [getCount, setCount] = useCurrentState(0);

    return (
      <div>
        <button data-testid="minus" onClick={() => setCount(getCount() - 1)}>
          Minus
        </button>
        {String(getCount())}
        <button data-testid="plus" onClick={() => setCount(getCount() + 1)}>
          Plus
        </button>
      </div>
    );
  }
  tester(Comp);
});
