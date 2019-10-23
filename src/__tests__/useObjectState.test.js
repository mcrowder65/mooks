import React from "react"
import { render, fireEvent } from "@testing-library/react"
import useObjectState from "../useObjectState"

function MyComponent({ initialState }) {
  const [state, setState] = useObjectState(initialState)
  return (
    <div>
      <button
        data-testid="button"
        onClick={() => setState({ message: "hello" })}
      >
        set
      </button>
      <button data-testid="empty-object" onClick={() => setState({})}>
        set empty object
      </button>
      <div>{state.message}</div>
      {state.initialMessage && <div>{state.initialMessage}</div>}
      <button
        data-testid="button-function"
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            message: "this was set with a function",
          }))
        }
      >
        button-function
      </button>
    </div>
  )
}

Array(
  { initialState: undefined, plainText: "undefined" },
  { initialState: {}, plainText: "empty object" },
  {
    initialState: { a: "hello", message: "chicken" },
    plainText: "filled object",
  },
).forEach(({ initialState, plainText }) => {
  describe(`WHEN passing ${plainText}`, () => {
    it(`THEN it doesn't throw`, () => {
      render(<MyComponent initialState={initialState} />)
    })
  })
})
Array(
  { initialState: null, plainText: "null" },
  { initialState: "asdf", plainText: "a string" },
  { initialState: () => {}, plainText: "a function" },
  { initialState: 0, plainText: "0" },
  { initialState: [], plainText: "empty array" },
  { initialState: [0, {}, []], plainText: "array with elements" },
).forEach(({ initialState, plainText }) => {
  describe(`WHEN passing ${plainText}`, () => {
    it(`THEN it throws`, () => {
      expect.assertions(1)
      try {
        render(<MyComponent initialState={initialState} />)
      } catch (e) {
        expect(e).toBeTruthy()
      }
    })
  })
})
Array({ buttonTestId: "button" }, { buttonTestId: "button-function" }).forEach(
  ({ buttonTestId }) => {
    describe(`WHEN clicking on ${buttonTestId}`, () => {
      it(`THEN it will display state.message even though i didn't forward the other state, and initialState.initialMessage stays`, () => {
        const initialState = { initialMessage: "asdf" }
        const { getByText, queryByText, getByTestId } = render(
          <MyComponent initialState={initialState} />,
        )
        expect(queryByText("hello")).toBeNull()
        expect(getByText(initialState.initialMessage)).toBeInTheDocument()

        fireEvent.click(getByTestId(buttonTestId))
        expect(getByText("asdf")).toBeInTheDocument()
        expect(getByText(initialState.initialMessage)).toBeInTheDocument()
      })
    })
  },
)
it(`WHEN setting to empty object, it works`, () => {
  const { queryByText, getByTestId } = render(
    <MyComponent initialState={{ message: "hello" }} />,
  )
  expect(queryByText("hello")).toBeInTheDocument()
  fireEvent.click(getByTestId("empty-object"))
  expect(queryByText("hello")).toBeNull()
})
