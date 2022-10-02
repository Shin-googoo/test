const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위아래 같은 식  = document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}
// JSON.stringify(XX) JS obhect나 array 또는 어떤 JS 코드라도 string으로 만들어준다.

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; 
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
  toDos.push(newTodo); // localstage에 넣어야 하는데 텍스트만 넣어줌.
  paintToDo(newTodo); // 호출용
  saveToDos();
}



toDoForm.addEventListener("submit", hadleToDoSubmit);
// submit 이벤트는 form태그에서만 쓸 수 있다.