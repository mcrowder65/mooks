import DefaultValue from "../default-value";

test("when value is undefined, null is returned", () => {
  expect(DefaultValue({ value: undefined })).toEqual(null);
});

test("when children is defined, defined is returned", () => {
  expect(DefaultValue({ value: "hello!", children: "pickles" })).toEqual(
    "pickles",
  );
});
