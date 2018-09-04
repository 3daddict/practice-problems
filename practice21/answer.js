/*Bipolar Loop

Create a single loop that simultaneously counts up on one variable, while counting down on another. The only code inside the for loop should be a console.log that lists both variables.

Put your solution in answer.js
hint: You can have multiple initiators, conditionals, and incrementers/decrementers in the same for loop. For example:
for(<initiator 1>,<initiator 2>; <check 1>,<check2>; <increment 1>,<increment 2>){
	//do work
}*/
function bipolarLoop() {
    for (northIndex = 0, southIndex = 20; northIndex <= 20, southIndex >= 0; northIndex++ , southIndex--) {
      //console.log('north = ' + northIndex);
      //console.log('south = ' + southIndex);
      console.log('answer = ' + northIndex, southIndex);
    }
  }
  bipolarLoop();