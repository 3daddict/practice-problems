/*Bipolar Loop

Create a single loop that simultaneously counts up on one variable, while counting down on another. The only code inside the for loop should be a console.log that lists both variables.

Put your solution in answer.js
hint: You can have multiple initiators, conditionals, and incrementers/decrementers in the same for loop. For example:
for(<initiator 1>,<initiator 2>; <check 1>,<check2>; <increment 1>,<increment 2>){
	//do work
}*/
function bipolarLoop() {
    for (i = 0, x = 20; i <= 20, x >= 0; i++ , x--) {
      console.log(i, x);
    }
  }
  bipolarLoop();