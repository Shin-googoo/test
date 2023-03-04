// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아에팀이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits); //4번째 추가
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); //1번째부터 시작해서 첫번째 배열 삭제
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);
fruits.splice(1, 1, '🍎', '🍓'); //1번째부터 시작해서 첫번째 배열 삭제 / 삭제한 부분부터 사과, 딸기 추가
console.log(fruits); // 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); //기존의 배열은 수정하지 않고 2는 제외하고 0부터 1을 추출
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1); //뒤부터 자르기도 가능
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); //arr1과 arr2의 객체를 붙여줌 
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse(); //객체의 숫자를 반대로 나오게 함
console.log(arr4);
console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3)); //flat안의 숫자로 2단 혹은 3단 배열을 하나의 배열로 펼쳐준다.
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정 / 배열의 모든 숫자를 0으로 바꿈
console.log(arr);

arr.fill('s', 1, 3); //1부터 3까지 s로 채워주는데 마지막 인덱스 제외로 1,2번째 배열을 s로 바꿔준다.
console.log(arr);

arr.fill('a', 1); // 0을 제외하고 1부터 모든 배열의 숫자를 a로 바꿔준다.
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(); 
console.log(text);
text = arr.join(' | '); //문자열에 원하는 문자를 넣어줄 수 있다.
console.log(text);
