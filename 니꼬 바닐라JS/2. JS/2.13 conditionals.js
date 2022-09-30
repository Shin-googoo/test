const age = parseInt( prompt("How old are you?"));
// prompt는 사용자에게 창을 띄워준다.
//parseInt는 string을 number로 변환 한다.

// console.log(age, parseInt(age)); 
//typeof는 바로 옆 variable의 형태를 알려줌.


// console.log(isNaN(age));
// isNaN 함수는 인자가 숫자인지 아닌지 알려준다.

if(isNaN(age) ) {
  /// condition === true
  console.log("please write a real positive number");
} else {
  // condition === false
  console.log("Thank you for writing your age");
}
// condition은 boolean으로 판별 가능해야 함.


if(isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if(age < 18) {
  console.log("you are too young.");
} else if (age >= 18 && age <= 50){ 
  // &&는 and의 의미다. 
  console.log("You can drink");
} else if (age >= 50 || age <= 80){
  console.log("You should exercise");
} els if (age > 80)
// else if는하나 이상의 조건을 추가 시켜준다.

// && 양옆의 조건이 모두 true여야 true로 인식한다.
// || OR은 둘 중 하나만 true인지 확인한다.

true || true === true
false || true === true
true || false === true
false || false === false