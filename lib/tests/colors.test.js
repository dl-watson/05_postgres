const request = require("supertest");
const express = require("express");
const app = express();

describe("app routes", () => {
  it("tests that tests are set up correctly", () => {});

  it("POST /colors", async () => {
    const expectation = "";

    const data = await request(app)
      .post("/colors")
      .send(expectation[0])
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  it("GET /colors", async () => {
    const expectation = "";

    const data = await request(app)
      .get("/colors")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  it("PUT /colors/id", async () => {
    const expectation = "";
    const update = "";
    const id = "";

    const data = await request(app)
      .put(`/colors/${id}`)
      .send(update[0])
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  it("DELETE /colors/id", async () => {
    const id = "";
    const num = 0;

    const data = await request(app)
      .put(`/colors/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    const colors = await request(app)
      .get("/colors/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual("");
    expect(colors.body.length).toEqual(num);
  });
});
