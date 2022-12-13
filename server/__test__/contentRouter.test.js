const { Pool } = require("pg");
const request = require("supertest");

const app = require("../app");
const content = require("../mocks/data");

// setup to mock pg
jest.mock("pg", () => {
  const mPool = {
    query: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

let pool;
// before each test case
beforeEach(() => {
  pool = new Pool();
});
// clean up after each test case done
afterEach(() => {
  jest.clearAllMocks();
});

describe('Given we have an "/api/content" endpoint', () => {
  // GET Routes
  it("When a valid GET request is made, then a 200 status code is returned with an array of questions", async () => {
    pool.query.mockResolvedValue({ rows: content });
    const checkBody = (res) => {
      expect(res.body).toEqual(content);
      expect(pool.query).toBeCalledTimes(1);
      expect(pool.query).toHaveBeenCalledWith("SELECT * FROM content;");
    };

    await request(app)
      .get("/api/content")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /application\/json/)
      .expect(checkBody)
      .expect(200);
  });

  it("When a valid GET request is made and there is a database error, then a 500 status code is returned", async () => {
    pool.query.mockRejectedValue(new Error("failed connection"));
    const checkBody = (res) => {
      expect(res.body).toStrictEqual({
        message: `Database query failed: failed connection`,
      });
      expect(pool.query).toBeCalledTimes(1);
      expect(pool.query).toHaveBeenCalledWith("SELECT * FROM content;");
    };

    await request(app)
      .get("/api/content")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /application\/json/)
      .expect(checkBody)
      .expect(500);
  });
});
