const assert = require('assert');
var weekOrWeekend = function(day){
  if (!day.startsWith('S') === true){
    console.log('week');
    return "week";
}  else  {
      console.log('weekend');
          return "weekend";
        };
};
    assert.equal(weekOrWeekend('Monday'), 'week');
    assert.equal(weekOrWeekend('Sunday'), 'weekend');

/*var weekOrWeekend = function(day){
  if(day.startsWith("S") === true){
    console.log('weekend');
    return 'weekend'
  }
  else{
    console.log('week')
    return 'week'
  }
}
weekOrWeekend('Monday');*/
