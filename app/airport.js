var Airport = (function(){
  var name = "";
  var location = "";
  var planes = [];

  function setName(newName) {
    this.name = newName;
  }

  function setLocation(location) {
    this.location = location;
  }

  function landPlane(plane) {
    planes.push(plane);
  }

  return {
    setName: setName,
    setLocation: setLocation,
    landPlane: landPlane,
    planes: planes
  };

})();

module.exports.airport = Airport;
