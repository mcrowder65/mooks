import React from "react";
import { render } from "../../test/test-utils";
import LoaderButton from "../loader-button";

test("that it renders without issues", () => {
  render(<LoaderButton />);
});

test("that it renders a CircularProgress when isFetching is true", () => {
  const { getByTestId } = render(<LoaderButton isFetching={true} />);

  expect(getByTestId("circular-progress")).toBeInTheDocument();
});
