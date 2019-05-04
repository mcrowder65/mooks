import React from "react";
import DefaultValues from "../DefaultValues";
import { render, fireEvent } from "react-testing-library";
import DefaultValue from "../DefaultValue";
import sleep from "../sleep";

test("that it renders without errors", () => {
  render(<DefaultValues />);
});

test("that it renders a spinner while DefaultValue value is undefined", async () => {
  function Comp() {
    const [value, setValue] = React.useState();
    setTimeout(() => {
      setValue("asdf");
    }, 500);
    return (
      <DefaultValues>
        <DefaultValue value={value}>
          <div>I am a div with content</div>
        </DefaultValue>
      </DefaultValues>
    );
  }
  const { queryByTestId, getByTestId } = render(<Comp />);

  expect(queryByTestId("circular-progress")).toBeInTheDocument();
  await sleep(500);
  expect(queryByTestId("circular-progress")).not.toBeInTheDocument();
});
