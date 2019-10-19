import React from "react";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";
import SnackbarProvider from "../SnackbarProvider";
import useSnackbar from "../useSnackbar";
import sleep from "../sleep";
test("that it displays for 3 seconds when nothing is added", async () => {
  function Comp() {
    const { addMessage } = useSnackbar();

    return (
      <div data-testid="click">
        <button
          data-testid="first-message"
          onClick={() => addMessage("first-message")}
        >
          click me
        </button>
      </div>
    );
  }
  const { getByText, getByTestId, queryByText } = render(
    <SnackbarProvider>
      <Comp />
    </SnackbarProvider>,
  );
  fireEvent.click(getByTestId("first-message"));
  expect(getByText(/first-message/i)).toBeInTheDocument();
  await sleep(3500);
  expect(queryByText(/first-message/i)).toBeNull();
});
test("that it displays a snackbar when you do useSnackbar", async () => {
  function Comp() {
    const { addMessage } = useSnackbar();

    return (
      <div data-testid="click">
        <button
          data-testid="first-message"
          onClick={() => addMessage("first-message", { autoHideDuration: 50 })}
        >
          click me
        </button>
        <button
          data-testid="second-message"
          onClick={() => addMessage("second-message", { autoHideDuration: 50 })}
        >
          click me
        </button>
      </div>
    );
  }

  const { getByText, getByTestId, container, queryByText } = render(
    <SnackbarProvider>
      <Comp />
    </SnackbarProvider>,
  );
  fireEvent.click(getByTestId("first-message"));
  expect(getByText(/first-message/i)).toBeInTheDocument();
  fireEvent.click(getByTestId("second-message"));
  await waitForDomChange(container);

  expect(getByText(/second-message/i)).toBeInTheDocument();
  fireEvent.blur(getByTestId("click"));
  expect(getByText(/second-message/i)).toBeInTheDocument();
  await sleep(400);
  expect(queryByText(/second-message/i)).toBeNull();
});
