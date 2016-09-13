var Airport = (function(){
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

  function takeOffPlane(plane) {
    var index = planes.indexOf(plane);

    if (index > -1) {
      planes.splice(index, 1);
    }
  }

  return {
    setName: setName,
    setLocation: setLocation,
    landPlane: landPlane,
    takeOffPlane: takeOffPlane,
    planes: planes
  };

})();

module.exports.airport = Airport;
