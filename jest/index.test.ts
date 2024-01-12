const axios = require("axios");
const run = require("./index").default;

const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

describe("Test", () => {
  afterEach(() => {
    mock.restore();
  });

  it("should test", async () => {
    mock.onGet().reply(200, "abc");

    expect(await run()).toEqual("abc");
  });

  it("should call the actual API", async () => {
    expect(await run()).not.toEqual("abc");
  });
});
