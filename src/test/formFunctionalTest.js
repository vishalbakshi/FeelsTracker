const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const Mocha = require("mocha");
const mocha = new Mocha({ ui: "tdd" });
const port = process.env.PORT || 8080;

chai.use(chaiHttp);

test("POST request responds with correct data", function(done) {
  chai
    .request("http://localhost:" + port)
    .post("/add")
    .type("form")
    .send({
      emotions: ["test_emotion"]
    })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.equal(res.body.message, "Submitted emotion");
      assert.equal(res.body.error, "No errors");
      done();
    });
});

test("QUnit tests run successfully", function(done) {
  chai
    .request("http://localhost:" + port)
    .get("/test")
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      console.log(res);
      done();
    });
});

// look through this example
// https://osric.com/chris/accidental-developer/2018/06/javascript-unit-tests-with-travisci-and-qunit/
