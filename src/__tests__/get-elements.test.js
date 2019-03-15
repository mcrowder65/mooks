import React from "react";
import { getElements } from "../get-elements";
import { render, cleanup, fireEvent } from "react-testing-library";

afterEach(cleanup);
test("that it returns all the things in the form", () => {
  function Component() {
    const [name, setName] = React.useState();
    const [address, setAddress] = React.useState();
    const onSubmit = (e) => {
      e.preventDefault();
      const elements = getElements(e);
      setName(`name: ${elements.name}`);
      setAddress(`address: ${elements.address}`);
    };

    return (
      <form onSubmit={onSubmit}>
        {name}
        <br />

        {address}
        <br />
        <input name="name" data-testid="name" />
        <input name="address" data-testid="address" />
        <button type="submit" data-testid="submit">
          Click me!
        </button>
      </form>
    );
  }

  const { getByTestId, getByText } = render(<Component />);

  fireEvent.input(getByTestId("name"), { target: { value: "Matt" } });
  fireEvent.input(getByTestId("address"), { target: { value: "Reston" } });

  fireEvent.click(getByTestId("submit"));

  expect(getByText(/name: Matt/i)).toBeInTheDocument();
  expect(getByText(/address: Reston/i)).toBeInTheDocument();
});
