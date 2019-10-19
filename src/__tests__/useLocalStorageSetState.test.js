import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "../../test/test-utils";
import useLocalStorageSetState from "../useLocalStorageSetState";

test("that after inserting text into the document then remounting, the text will remain", () => {
  function MyComponent() {
    const [name, setName] = useLocalStorageSetState("", "name");
    return (
      <div>
        {name}
        <input
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  }
  const { queryByText, getByTestId, unmount, rerender } = render(
    <MyComponent />,
  );

  const newValue = "Lebron James";
  fireEvent.change(getByTestId("name"), { target: { value: newValue } });

  expect(queryByText(newValue)).toBeInTheDocument();

  unmount();

  rerender(<MyComponent />);

  expect(queryByText(newValue)).toBeInTheDocument();
});

test("that it throws when no name is provided", () => {
  expect(() => useLocalStorageSetState("asdf")).toThrow();
});

test("that when passing a function, it utilizes it to set the value", () => {
  function MyComp(props) {
    const [index, setIndex] = useLocalStorageSetState((prev) => {
      if (prev >= props.arr.length || prev === undefined) {
        return 0;
      } else {
        return prev;
      }
    }, "index-local-storage");
    return (
      <div>
        <button data-testid="set-index-0" onClick={() => setIndex(0)} />
        <div data-testid="index">{props.arr[index]}</div>
        <button data-testid="set-index-1" onClick={() => setIndex(1)} />
      </div>
    );
  }
  const { getByTestId, getByText, rerender, unmount } = render(
    <MyComp arr={["first", "second"]} />,
  );

  expect(getByText(/first/i)).toBeInTheDocument();

  fireEvent.click(getByTestId("set-index-1"));

  expect(getByText(/second/i)).toBeInTheDocument();

  unmount();
  rerender(<MyComp arr={["first"]} />);

  expect(getByText(/first/i)).toBeInTheDocument();
});

test("it takes the new initialValue when the next initialValue is different", () => {
  function MyComp(props) {
    const [state] = useLocalStorageSetState(
      props.initialValue,
      "new-keys-check",
      true,
    );
    return <div>{JSON.stringify(state)}</div>;
  }

  let initialValue = { hello: "world" };
  const { getByText, rerender, unmount } = render(
    <MyComp initialValue={initialValue} />,
  );

  expect(getByText(JSON.stringify(initialValue))).toBeInTheDocument();

  initialValue = { goodbye: "world" };
  unmount();
  rerender(<MyComp initialValue={initialValue} />);

  expect(getByText(JSON.stringify(initialValue))).toBeInTheDocument();
});
