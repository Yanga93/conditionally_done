const assert = require('assert');
var fromWhere = function(regNum){
  if (regNum.startsWith('CY') === true){
    console.log('Bellville');
      return 'Bellville';
    }
  if (regNum.startsWith('CJ') === true){
    console.log('Paarl');
      return 'Paarl';
  }
  if (regNum.startsWith('CA') === true){
    console.log('Cape Town');
      return 'Cape Town';
  }

   else {
    console.log('Some other place!');
          return 'Some other place!';
  }
};
assert.equal(fromWhere('CJ'), 'Paarl');
//assert.equal(fromWhere('GP'), 'Some other place!');
