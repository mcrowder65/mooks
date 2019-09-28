import React from "react";
import { render } from "../../test/test-utils";
import Signup from "../Signup";
import markdown from "../Signup.md";

test("that it renders without errors", () => {
  render(<Signup />);
});

const scope = { Signup };

describe("it matches the visual snapshot", () => {
  describe("it matches the visual snapshot", () => {
    expect({ markdown, scope }).toMatchVisualSnapshot();
  });
});
