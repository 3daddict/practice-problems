var start_num = 0;
var end_num = 0;
var generatedRange = [];
var randomItem = 0;

function random_range(start_num, end_num){
  for(var i = start_num; i <= end_num; i++){
      generatedRange.push(i);
      randomItem = generatedRange[Math.floor(Math.random()*generatedRange.length)];
  }
  return randomItem;
}
random_range(2, 15);

//references
//https://stackoverflow.com/questions/8069315/create-array-of-all-integers-between-two-numbers-inclusive-in-javascript-jquer