const request = require("supertest");
const app = require("../app");

describe("REST-API of Books", () => {
  it("GET /books", async () => {
    const res = await request(app).get("/api/v1/books");
    expect(res.statusCode).toEqual(200);
    expect(res.results).not.toBe(0);
  });

  it("GET /books/:id", async () => {
    const postId = 1;
    const res = await request(app).get(`/api/v1/books/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data).toHaveProperty("id", postId);
  });

  //   it("POST /books", async () => {
  //     const res = await request(app).post("/api/v1/books").send({
  //       name: "test_name",
  //       author: "test_author",
  //       rating: 5,
  //       reviews: 100,
  //       price: 10,
  //       year: 2021,
  //       genre: "Fiction", //enum
  //     });
  //     expect(res.statusCode).toEqual(201);
  //     expect(res.body).toHaveProperty("status", "success");
  //   });

  //   it("DELETE /books", async () => {
  //     const delId = 600;
  //     const res = await request(app).delete(`/api/v1/books/${delId}`);
  //     expect(res.statusCode).toEqual(204);
  //   });

  it("PATCH /books", async () => {
    const id = 1;
    const updateObj = {
      name: "10-Day Green Smoothie Cleanse",
      author: "JJ Smith",
    };
    const res = await request(app).patch(`/api/v1/books/${id}`).send(updateObj);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Book updated");
  });
});

