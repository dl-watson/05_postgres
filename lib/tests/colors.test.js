const fakeRequest = require("supertest");
const app = require("../../index");

describe("app routes", () => {
  test("POST colors", async () => {
    const expectation = "";

    const data = await fakeRequest(app)
      .post("/colors")
      .send(expectation[0])
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("GET colors", async () => {
    const expectation = "";

    const data = await fakeRequest(app)
      .get("/colors")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("PUT colors", async () => {
    const expectation = "";
    const update = "";
    const id = "";

    const data = await fakeRequest(app)
      .put(`/colors/${id}`)
      .send(update[0])
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("DELETE colors", async () => {
    const id = "";
    const num = 0;

    const data = await fakeRequest(app)
      .put(`/colors/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    const colors = await fakeRequest(app)
      .get("/colors/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual("");
    expect(colors.body.length).toEqual(num);
  });
});
