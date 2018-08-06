var num1 = 0;
var num2 = 0;
var operator = "";
var calculatedAnswer;

function do_math(num1, num2, operator){
  if(operator === "+"){
    calculatedAnswer = num1 + num2;
  } else if(operator === "-"){
    calculatedAnswer = num1 - num2;
  } else if(operator === "*" || operator === "x" || operator === "X"){
    calculatedAnswer = num1 * num2;
  } else if(operator === "/"){
    calculatedAnswer = num1 / num2;
  } else {
    alert("please use a valid operator + - * /")
  }
  return calculatedAnswer;
}
do_math(5, 2, '*')
console.log(calculatedAnswer);