import React from "react"
import useArrowKeyListener from "../useArrowKeyListener"
import { render, fireEvent } from "@testing-library/react"

test("that when pressing right, it will trigger onRightKeyPress", () => {
  function Comp() {
    const [count, setCount] = React.useState(0)
    const onRightKeyPress = () => setCount((state) => state + 1)
    useArrowKeyListener({ onRightKeyPress })
    return <div>{String(count)}</div>
  }

  const { getByText, container } = render(<Comp />)

  expect(getByText(/0/i)).toBeInTheDocument()

  fireEvent.keyDown(container, { key: "ArrowRight" })

  expect(getByText(/1/i)).toBeInTheDocument()
})

test("that when pressing left, it will trigger onLeftKeyPress", () => {
  function Comp() {
    const [count, setCount] = React.useState(0)
    const onLeftKeyPress = () => setCount((state) => state - 1)
    useArrowKeyListener({ onLeftKeyPress })
    return <div>{String(count)}</div>
  }

  const { getByText, container } = render(<Comp />)

  expect(getByText(/0/i)).toBeInTheDocument()

  fireEvent.keyDown(container, { key: "ArrowLeft" })

  expect(getByText(/-1/i)).toBeInTheDocument()
})

test("when focused on a text input, it won't fire the keyDown listener, then when blurring, it will work.", () => {
  function Comp() {
    const [count, setCount] = React.useState(0)
    const onLeftKeyPress = () => setCount((state) => state - 1)
    const { onBlur, onFocus } = useArrowKeyListener({ onLeftKeyPress })
    return (
      <div>
        <input data-testid="input" onBlur={onBlur} onFocus={onFocus} />{" "}
        {String(count)}
      </div>
    )
  }

  const { getByTestId, getByText, container } = render(<Comp />)

  expect(getByText(/0/i)).toBeInTheDocument()

  fireEvent.focus(getByTestId("input"))

  fireEvent.keyDown(container, { key: "ArrowLeft" })

  expect(getByText(/0/i)).toBeInTheDocument()

  fireEvent.blur(getByTestId("input"))

  fireEvent.keyDown(container, { key: "ArrowLeft" })

  expect(getByText(/-1/i)).toBeInTheDocument()
})

test("when entering a key besides ArrowLeft or ArrowRight, it does nothing", () => {
  function Comp() {
    const [count, setCount] = React.useState(0)
    const onLeftKeyPress = () => setCount((state) => state - 1)
    const { onBlur, onFocus } = useArrowKeyListener({ onLeftKeyPress })
    return (
      <div>
        <input data-testid="input" onBlur={onBlur} onFocus={onFocus} />
        {String(count)}
      </div>
    )
  }

  const { getByText, container } = render(<Comp />)

  expect(getByText(/0/i)).toBeInTheDocument()

  fireEvent.keyDown(container, { key: "asdf" })

  expect(getByText(/0/i)).toBeInTheDocument()
})
