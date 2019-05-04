import React from "react";
import DefaultValue from "../DefaultValue";
import { render, fireEvent } from "react-testing-library";
import * as defaultValues from "../DefaultValues";
test("when value is undefined, null is returned", () => {
  const { queryByTestId } = render(
    <DefaultValue value={undefined}>
      <div data-testid="pickles">i am the pickles div</div>
    </DefaultValue>,
  );
  expect(queryByTestId("pickles")).not.toBeInTheDocument();
});

test("when children is defined, defined is returned", () => {
  const { getByTestId } = render(
    <DefaultValue value="hello">
      <div data-testid="pickles">i am the pickles div</div>
    </DefaultValue>,
  );
  expect(getByTestId("pickles")).toBeInTheDocument();
});

test("when value is undefined on mount, it called useDefaultValues.startedGettingValue", () => {
  const startedGettingValueMock = jest.fn();
  const gotValueMock = jest.fn();
  jest.spyOn(defaultValues, "useDefaultValues").mockImplementation(() => {
    return {
      startedGettingValue: startedGettingValueMock,
      gotValue: gotValueMock,
    };
  });
  function Comp() {
    const [value, setValue] = React.useState(undefined);
    return (
      <React.Fragment>
        <button data-testid="set-value" onClick={() => setValue("asdf")} />
        <DefaultValue value={value}>
          <div>I am a div with content</div>
        </DefaultValue>
      </React.Fragment>
    );
  }
  const { getByTestId } = render(<Comp />);
  expect(startedGettingValueMock).toHaveBeenCalled();
  fireEvent.click(getByTestId("set-value"));

  expect(gotValueMock).toHaveBeenCalled();

  defaultValues.useDefaultValues.mockRestore();
});
