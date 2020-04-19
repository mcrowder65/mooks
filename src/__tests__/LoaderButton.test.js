import React from "react"
import { render } from "../../test/test-utils"
import LoaderButton from "../LoaderButton"

test("that it renders without issues", () => {
  render(<LoaderButton isLoading={false}>press me!</LoaderButton>)
})

test("that it renders a CircularProgress when isLoading is true", () => {
  const { getByTestId } = render(
    <LoaderButton isLoading={true}>click me!</LoaderButton>,
  )

  expect(getByTestId("circular-progress")).toBeInTheDocument()
})
