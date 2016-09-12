var chai = require('chai');
var expect = chai.expect;

var Airport = require("../app/airport").airport;
var plane = require("../app/plane").plane;

describe("Airport", function(){

  describe("#setName", function(){
    it("Should set the Airports name", function(){
      Airport.setName("Heathrow");
      expect(Airport.name).to.equal("Heathrow");
    });
  });

  describe("#setLocation", function(){
    it("Should set the Airports location", function(){
      Airport.setLocation("London");
      expect(Airport.location).to.equal("London");
    });
  });

  describe("#landPlane", function(){
    it("Should store the plane object", function(){
      Airport.landPlane(plane);
      expect(Airport.planes).to.contain(plane);
    });
  });
});
