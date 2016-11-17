const assert = require('assert');
var fromWhere = function(regNum){

 switch(regNum.substring(0,2)){
 case 'CY':
   return 'Bellville';
     break;

 case 'CJ':
   return 'Paarl';
     break;

 case 'CA':
   return 'Cape Town';
     break;

 default:
       return 'Some other place!';
   }
 };
 //console.log(fromWhere('GP 2536'));
   assert.equal(fromWhere('CJ'), 'Paarl');

//Using if and else statements condition
/*
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
assert.equal(fromWhere('CJ'), 'Paarl');*/
//assert.equal(fromWhere('GP'), 'Some other place!');
