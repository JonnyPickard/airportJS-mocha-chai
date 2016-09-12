var plane = (function() {
  var name = "";

  function setName(newName) {
    this.name = newName;
  }

  return {
    setName: setName
  };

})();

module.exports.plane = plane;
