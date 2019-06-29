import React from "react";
import { render, fireEvent } from "react-testing-library";
import useObjectState from "../useObjectState";

function MyComponent({ initialState }) {
  const [state, setState] = useObjectState(initialState);
  return (
    <div>
      <button
        data-testid="button"
        onClick={() => setState({ message: "hello" })}
      >
        set
      </button>
      {state.message}
    </div>
  );
}

[
  { initialState: undefined, plainText: "undefined" },
  { initialState: {}, plainText: "empty object" },
  {
    initialState: { a: "hello", message: "chicken" },
    plainText: "filled object",
  },
].forEach(({ initialState, plainText }) => {
  describe(`WHEN passing ${plainText}`, () => {
    it(`THEN it doesn't throw`, () => {
      render(<MyComponent initialState={initialState} />);
    });
  });
});

[
  { initialState: null, plainText: "null" },
  { initialState: "asdf", plainText: "a string" },
  { initialState: () => {}, plainText: "a function" },
  { initialState: 0, plainText: "0" },
  { initialState: [], plainText: "empty array" },
  { initialState: [0, {}, []], plainText: "array with elements" },
].forEach(({ initialState, plainText }) => {
  describe(`WHEN passing ${plainText}`, () => {
    it(`THEN it throws`, () => {
      expect.assertions(1);
      try {
        render(<MyComponent initialState={initialState} />);
      } catch (e) {
        expect(e).toBeTruthy();
      }
    });
  });
});

test("when clicking on the button, it will display state.message even though i didn't forward the other state", () => {
  const { getByText, queryByText, getByTestId } = render(<MyComponent />);
  expect(queryByText("hello")).toBeNull();
  fireEvent.click(getByTestId("button"));
  expect(getByText("hello")).toBeInTheDocument();
});
