const assert = require('assert');
var transportFee = function(shift){
if(shift == 'morning'){
    return 'R20';

} else if (shift == 'afternoon'){
    return 'R10';

} else {
    return 'R0';
  }
};
    assert.equal(transportFee('morning'), 'R20');
