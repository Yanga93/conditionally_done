var whichPlatform = function(){
  switch(route) {
    case "Langa":
          return "platform 1";
    case "Stellenbonsch":
          return "platform 6";
    case "Wynberg":
          return "Platform 2";
    default:
          return "There is no train to " + route;
  }
}

const assert = require('assert');

assert.equal(whichPlatform('Langa'), '');
assert.equal(whichPlatform('Stellenbonsch'), '');
assert.equal(whichPlatform('Wynberg'), '');
assert.equal(whichPlatform('Parow'), '');
