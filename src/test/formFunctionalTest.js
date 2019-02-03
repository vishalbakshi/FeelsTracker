var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var Mocha = require("mocha");
var mocha = new Mocha({ ui: "tdd" });

chai.use(chaiHttp);

test("POST request responds with correct data", function(done) {
  chai
    .request("http://localhost:8080")
    .post("/add")
    .type("form")
    .send({
      emotions: ["test_emotion"]
    })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.equal(res.body.message, "Submitted emotion");
      assert.equal(res.body.errors, "No errors");
      done();
    });
});
