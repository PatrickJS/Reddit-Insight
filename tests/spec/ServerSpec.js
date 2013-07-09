var request = require('request');

describe("Server", function() {

  beforeEach(function() {
  });

  it("should respond with", function(done) {
    request("http://localhost:3000/", function(error, response, body){
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  describe("WordCloud api", function() {
    beforeEach(function() {
    });

    it("should response with 404", function(done) {
      request("http://localhost:3000/api/wordClouds/", function(error, response, body){
        expect(response.statusCode).toEqual(404);
        done();
      });
    });

    it("should response with 200 for GamingNoun", function(done) {
      request("http://localhost:3000/api/wordClouds/GamingNoun", function(error, response, body){
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

  });

});
