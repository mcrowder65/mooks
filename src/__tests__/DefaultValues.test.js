import React from "react";
import DefaultValues from "../DefaultValues";
import { render, fireEvent } from "@testing-library/react";
import DefaultValue from "../DefaultValue";

test("that it renders without errors", () => {
  render(<DefaultValues />);
});

test("that it renders a spinner while it's loading", () => {
  function Comp() {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
      <React.Fragment>
        <button data-testid="change-value" onClick={() => setIsLoading(false)}>
          Change value!
        </button>
        <DefaultValues isLoading={isLoading}>
          <DefaultValue value={"asdf"}>
            <div>I am a div with content</div>
          </DefaultValue>
        </DefaultValues>
      </React.Fragment>
    );
  }
  const { queryByTestId, getByTestId } = render(<Comp />);

  expect(queryByTestId("circular-progress")).toBeInTheDocument();
  fireEvent.click(getByTestId("change-value"));
  expect(queryByTestId("circular-progress")).not.toBeInTheDocument();
});
