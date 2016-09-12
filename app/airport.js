var Airport = (function(){
  var name = "";
  var location = "";

  function setName(newName) {
    this.name = newName;
  }

  function setLocation(location) {
    this.location = location;
  }

  return {
    setName: setName,
    setLocation: setLocation
  };

})();

module.exports.airport = Airport;
