import React from "react"

import { render } from "@testing-library/react"
import useNetworkStatus from "../useNetworkStatus"

test("that it renders online", () => {
  jest.spyOn(window, "addEventListener").mockImplementation(
    jest.fn((string, func) => {
      return func
    }),
  )
  jest.spyOn(window, "removeEventListener").mockImplementation(
    jest.fn((string, func) => {
      return func
    }),
  )

  function Comp() {
    const networkStatus = useNetworkStatus()

    return <div>{networkStatus}</div>
  }

  const { getByText, unmount } = render(<Comp />)

  expect(getByText("online")).toBeInTheDocument()
  const [onlineCallback, offlineCallback] = window.addEventListener.mock.calls
    .filter(([string]) => {
      return string === "online" || string === "offline"
    })
    .map((args) => args[1])
  offlineCallback()
  expect(getByText("offline")).toBeInTheDocument()

  onlineCallback()
  expect(getByText("online")).toBeInTheDocument()

  window.addEventListener.mockRestore()

  unmount()

  const [online, offline] = window.removeEventListener.mock.calls
    .filter(([string]) => {
      return string === "online" || string === "offline"
    })
    .map((args) => args[0])
  expect(online).toEqual("online")
  expect(offline).toEqual("offline")

  window.removeEventListener.mockRestore()
})

test("that window.navigator.onLine is false, it renders offline initially", () => {
  jest.spyOn(window.navigator, "onLine", "get").mockReturnValueOnce(false)
  function Comp() {
    const networkStatus = useNetworkStatus()

    return <div>{networkStatus}</div>
  }

  const { getByText } = render(<Comp />)

  expect(getByText("offline")).toBeInTheDocument()
})
