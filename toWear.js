const assert = require('assert');
var toWear = function(temp){
    if (temp <= 20){
      return 'Is cold: Wear jacket'
  }

    else if (temp >= 21 && temp <= 27){
      return 'Is partly cloudy: Wear a jersey'
  }
    else {
      return 'Is sunny: Wear a t-shirt'
  }
};
//console.log(toWear('30'));
  assert.equal(toWear('30'), 'Is sunny: Wear a t-shirt');
