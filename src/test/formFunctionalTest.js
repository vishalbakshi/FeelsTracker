var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var Mocha = require("mocha");
var mocha = new Mocha({ ui: "tdd" });

chai.use(chaiHttp);

test("POST request responds with correct data", function(done) {
  chai
    .request("http://localhost:8080")
    .post("/")
    .type("form")
    .send({
      emotion: "test_emotion"
    })
    .end(function(err, res) {
      let emotionDate = new Date().toDateString();
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "test_emotion");
      assert.include(res.text, emotionDate);
      done();
    });
});
