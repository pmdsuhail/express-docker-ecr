const app = require("../app");
const req = require("supertest");
const chai = require("chai");
const expect = chai.expect;

describe("GET /", () => {
  it("Should return Home Page", (done) => {
    req(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<h1 class="mt-5">Home Page</h1>');
        done();
      });
  });
});
