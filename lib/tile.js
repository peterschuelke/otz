var RANDOM_CHANCE = .2;
var autoId = 0;

module.exports = {
  random: function() {
    var navigable = Math.random() > RANDOM_CHANCE;
    return {
      id: 't'+autoId++,
      material: navigable ? "grass" : "rock",
      navigable: navigable
    }
  }
}
