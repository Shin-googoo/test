// 사용예제 1
function add(num1, num2) {
  console.log('function');
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName}  ${lastName} 🤘`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName2(firstName2, lastName2));