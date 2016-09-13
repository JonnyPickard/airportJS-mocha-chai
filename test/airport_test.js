var chai = require('chai');
var expect = chai.expect;

var Airport = require("../app/airport");
var plane = require("../app/plane").plane;

describe("Airport", function(){
  var airport = Airport.airport;

  describe("#setName", function(){
    it("Should set the Airports name", function(){
      airport.setName("Heathrow");
      expect(airport.name).to.equal("Heathrow");
    });
  });

  describe("#setLocation", function(){
    it("Should set the Airports location", function(){
      airport.setLocation("London");
      expect(airport.location).to.equal("London");
    });
  });

  describe("#landPlane", function(){
    it("Should store the plane object", function(){
      airport.landPlane(plane);
      expect(airport.planes).to.contain(plane);
      airport.planes = [];
    });
  });

  describe("#takeOffPlane", function(){
    it("Should release the stored plane object", function(){
      airport.takeOffPlane(plane);
      expect(airport.planes).to.not.contain(plane);
    });
  });
});
