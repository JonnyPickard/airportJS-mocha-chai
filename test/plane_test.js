var chai = require('chai');
var expect = chai.expect;

var plane = require("./../app/plane").plane;

describe('Plane', function(){

  describe('#setName', function(){
    it("should set the name of the plane", function() {
      plane.setName("Boeing");
      expect(plane.name).to.equal("Boeing");
    });
  });
});
