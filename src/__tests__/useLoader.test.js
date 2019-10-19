import React from "react";
import sleep from "../sleep";
import useLoader from "../useLoader";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";

test("that when passing an apiCall, it exposes isLoading, and the enhanced apiCall ", async () => {
  async function call() {
    await sleep(1000);
  }

  function Comp() {
    const { isLoading, apiCall } = useLoader(call);

    return (
      <div>
        {String(isLoading)}
        <button onClick={apiCall} data-testid="api-call">
          Click me!!
        </button>
      </div>
    );
  }

  const { getByTestId, getByText, container } = render(<Comp />);
  expect(getByText(/false/i)).toBeInTheDocument();

  fireEvent.click(getByTestId("api-call"));

  expect(getByText(/true/i)).toBeInTheDocument();
  await waitForDomChange(container);
  expect(getByText(/false/i)).toBeInTheDocument();
});

test("that it throws when the wrapped api call throws", async () => {
  function call() {
    throw new Error("I am error");
  }
  function Comp() {
    const [errorMessage, setErrorMessage] = React.useState("not error");
    const { apiCall } = useLoader(call);
    // wrap around the apiCall, display that an error occurred with the catch.
    const wrapper = async () => {
      try {
        await apiCall();
      } catch (e) {
        setErrorMessage("am error");
      }
    };
    return (
      <div>
        <button data-testid="api-call" onClick={wrapper}>
          Api call
        </button>

        {errorMessage}
      </div>
    );
  }

  const { getByText, getByTestId, container } = render(<Comp />);
  expect(getByText(/not error/i)).toBeInTheDocument();
  fireEvent.click(getByTestId("api-call"));
  await waitForDomChange(container);
  expect(getByText(/am error/i)).toBeInTheDocument();
});
