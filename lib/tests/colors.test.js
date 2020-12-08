const request = require("supertest");
const app = require("../../index");

describe("app routes", () => {
  test.skip("POST colors", async () => {
    const post = {
      colorCode: "FFFFFF",
      colorUrl: "https://www.posttest.com",
    };
    const expectation = {
      id: "11",
      colorCode: "FFFFFF",
      colorUrl: "https://www.posttest.com",
    };
    const data = await request(app)
      .post("/colors")
      .send(post)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test.skip("GET all colors", async () => {
    const expectation = [
      {
        id: "1",
        colorCode: "0123456",
        colorUrl: "https://www.puttest.com",
      },
      {
        id: "11",
        colorCode: "FFFFFF",
        colorUrl: "https://www.posttest.com",
      },
    ];

    const data = await request(app)
      .get("/colors/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test.skip("GET color by id", async () => {
    const expectation = {
      id: "1",
      colorCode: "0123456",
      colorUrl: "https://www.puttest.com",
    };

    const data = await request(app)
      .get("/colors/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test.skip("PUT colors", async () => {
    const update = {
      colorCode: "000000",
      colorUrl: "https://www.put.com",
    };

    const expectation = {
      id: "1",
      colorCode: "000000",
      colorUrl: "https://www.put.com",
    };

    const id = 1;

    const data = await request(app)
      .put(`/colors/${id}`)
      .send(update)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test.skip("DELETE colors", async () => {
    const id = 10;
    const expectation = [
      {
        id: "1",
        colorCode: "0123456",
        colorUrl: "https://www.puttest.com",
      },
    ];

    const data = await request(app)
      .delete(`/colors/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    const colors = await request(app)
      .get("/colors/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(colors.body).toEqual(expectation);
  });
});
