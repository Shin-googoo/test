const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위아래 같은 식  = document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];
// 배열이 비어 기존 배열과 새로운 배열을 같이 저장 못함. 
// -> const 대신 let을 써준다.

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// JSON.stringify(XX) JS object나 array 또는 어떤 JS 코드라도 string으로 만들어준다.

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
// toDo.id는 숫자열, li.id는 문자열이라 parseInt로 문자열을 숫자로 바꾼다.
  saveToDos(); // -> 배열을 지운 후 다시 불러와야해 한번 더 써준다.
}  

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; 
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li요소 아래 자식으로 span을 넣음
  li.appendChild(button); // li요소 아래 자식으로 span을 넣음
  // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트
  toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
  event.preventDefault();
  // preventDefult는 submit의 기본동작인 새로고침을 막는다.
  // console.log(toDoInput.value); -> 입력값이 나오는지 확인
  const newTodo = toDoInput.value;
  // input의 현재 value를 새로운 변수에 복사.
  toDoInput.value = ""; //-> 검색창에 입력 후 엔터 치면 빈값 생성
  const newTodoObj = {
    text:newTodo,   //-> local storage에서도 완전 삭제하기 위해 id값 필요하다.
    id: Date.now(), //-> 랜덤한 성질을 이용해 id를 만들어준다.
  };
  toDos.push(newTodoObj); // localstage에 넣어야 하는데 텍스트만 넣어줌.
  paintToDo(newTodoObj); // 호출용
  saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);
// submit 이벤트는 form태그에서만 쓸 수 있다.

// function sayHello(item) {
//  console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach(sayHello);
  toDos = parsedToDos; // -> toDos에 parsedToDos를 넣어 전에 있던 toDo들을 복원.
  parsedToDos.forEach(paintToDo); 
  // forEach 함수는 paintToDo를 parsedToDos배열의 요소마다 실행한다.
}
// (item) => console.log("this is the turn of ", item)

// JSON.stringify([1, 2, 3, 4])
// -> "[1,2,3,4]"
// JSON.parse("[1,2,3,4]") -> 실제로 무언가 할 수 있는 배열을 얻음.
// [1, 2, 3, 4]

function sexyFilter(){

}

[1, 2, 3, 4].filter(sexyFilter)
// JS가 sexyFilter를 4번 부르는것.
sexyFilter(4)
// sexyFilter 함수는 반드시 true를 리턴해야 된다.


// 특정 배열 지우는 예시
// const arr = ["pizza", "banana", "tomato"] 
// function sexyFilter(food){ return food !== "banana"}
// arrfilter(sexyFilter)
// -> food가 banana가 아닌 것만 정렬한다.

// const arr = [1234, 5454, 223, 122, 45, 6775, 334]
//function sexyFunction(potato) {return potato <= 1000}
// 1000보다 높은 수는 제외시키고 배열한다.