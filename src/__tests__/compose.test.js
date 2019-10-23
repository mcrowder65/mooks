import compose from "../compose"
test("that it doesn't throw when you don't pass anything it doesn't throw", () => {
  const val = compose()

  expect(val("pickles")).toEqual("pickles")
})
test("that it calls multiple functions", () => {
  const add5 = (num) => num + 5

  const add10 = compose(
    add5,
    add5,
  )
  expect(add10(5)).toEqual(15)
})
