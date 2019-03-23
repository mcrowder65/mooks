import React from "react";
import { render } from "../../test/test-utils";
import LoaderCard from "../loader-card";

test("that it renders without errors", () => {
  render(<LoaderCard />);
});

test("that it renders a CircularProgress when isFetching is true", () => {
  const { getByTestId } = render(<LoaderCard isFetching={true} />);

  expect(getByTestId("linear-progress")).toBeInTheDocument();
});
