import React from "react"
import DefaultValue from "../DefaultValue"

import { render, fireEvent } from "@testing-library/react"
test("when value is undefined, null is returned", () => {
  const { queryByTestId } = render(
    <DefaultValue value={undefined}>
      <div data-testid="pickles">i am the pickles div</div>
    </DefaultValue>,
  )
  expect(queryByTestId("pickles")).not.toBeInTheDocument()
})

test("when value is defined, defined is returned", () => {
  const { getByTestId } = render(
    <DefaultValue value="hello">
      <div data-testid="pickles">i am the pickles div</div>
    </DefaultValue>,
  )
  expect(getByTestId("pickles")).toBeInTheDocument()
})

test("when value is undefined on mount, it called useDefaultValues.startedGettingValue", () => {
  function Comp() {
    const [value, setValue] = React.useState(undefined)
    return (
      <React.Fragment>
        <button data-testid="set-value" onClick={() => setValue("asdf")} />
        <DefaultValue value={value}>
          <div data-testid="test">I am a div with content</div>
        </DefaultValue>
      </React.Fragment>
    )
  }
  const { getByTestId } = render(<Comp />)
  fireEvent.click(getByTestId("set-value"))
  expect(getByTestId("test")).toBeInTheDocument()
})
