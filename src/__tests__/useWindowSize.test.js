import React from "react"

import { render } from "@testing-library/react"
import useWindowSize from "../useWindowSize"
function Comp() {
  const { innerHeight, innerWidth, outerHeight, outerWidth } = useWindowSize()
  return (
    <div>
      <div>
        innerHeight:
        {innerHeight}
      </div>
      <div>
        innerWidth:
        {innerWidth}
      </div>
      <div>
        outerHeight:
        {outerHeight}
      </div>
      <div>
        outerWidth:
        {outerWidth}
      </div>
    </div>
  )
}

test("that it renders the dimensions", () => {
  const { getByText } = render(<Comp />)

  expect(getByText(/innerHeight:*768/)).toBeInTheDocument()
  expect(getByText(/innerWidth:*1024/)).toBeInTheDocument()
  expect(getByText(/outerHeight:*768/)).toBeInTheDocument()
  expect(getByText(/outerWidth:*1024/)).toBeInTheDocument()

  global.innerHeight = 501
  global.innerWidth = 500
  global.outerHeight = 502
  global.outerWidth = 503
  // Trigger the window resize event.
  global.window.dispatchEvent(new Event("resize"))

  expect(getByText(/innerHeight:*501/)).toBeInTheDocument()
  expect(getByText(/innerWidth:*500/)).toBeInTheDocument()
  expect(getByText(/outerHeight:*502/)).toBeInTheDocument()
  expect(getByText(/outerWidth:*503/)).toBeInTheDocument()
})
