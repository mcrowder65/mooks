import React from "react";
import { render } from "../../test/test-utils";
import Login from "../Login";
import markdown from "../Login.md";

test("that it renders without issues", () => {
  render(<Login />);
});

const scope = { Login };

describe("it matches the visual snapshot", () => {
  expect({ markdown, scope }).toMatchVisualSnapshot();
});
