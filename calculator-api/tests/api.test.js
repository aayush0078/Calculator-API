const request = require("supertest");
const app = require("../src/server");

describe("GET /", () => {
  it("returns API metadata", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("calculator-api");
  });
});

describe("POST /calculate/add", () => {
  it("adds two numbers", async () => {
    const res = await request(app).post("/calculate/add").send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  it("returns 400 for missing operand", async () => {
    const res = await request(app).post("/calculate/add").send({ a: 5 });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

describe("POST /calculate/divide", () => {
  it("returns 400 on division by zero", async () => {
    const res = await request(app).post("/calculate/divide").send({ a: 9, b: 0 });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});

describe("POST /calculate/sqrt", () => {
  it("returns square root", async () => {
    const res = await request(app).post("/calculate/sqrt").send({ a: 16 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(4);
  });
});

describe("Unknown route", () => {
  it("returns 404", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toBe(404);
  });
});
