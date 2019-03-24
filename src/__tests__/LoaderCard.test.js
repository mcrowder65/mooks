import React from "react";
import { render } from "../../test/test-utils";
import LoaderCard from "../LoaderCard";

test("that it renders without errors", () => {
  render(<LoaderCard />);
});

test("that it renders a CircularProgress when isLoading is true", () => {
  const { getByTestId } = render(<LoaderCard isLoading={true} />);

  expect(getByTestId("linear-progress")).toBeInTheDocument();
});
