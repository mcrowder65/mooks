import sleep from "../sleep"

test("sleep just does a setTimeout", async () => {
  await sleep(10)
})
