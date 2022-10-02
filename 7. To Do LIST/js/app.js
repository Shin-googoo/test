const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();  
  // 브라우저가 자동으로 페이지 새로고침되는 event를 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME); 
  // form을 다시 숨겨준다.
  const username = loginInput.value; 
  // loginInput.value를 username으로 변수지정.
  localStorage.setItem(USERNAME_KEY, username); 
  // username값을 username이라는 key와 함께 local storage에 저장
  paintGreetins(username);
}

function paintGreetins(username){
  greeting.innerText = `Hello ${username}`; 
  // 비어있는 h1요소에 `Hello ${username}` 텍스트 추가.
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // h1 요소로부터 "hidden"이라는 클래스명을 제거.
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// localStorage는 정보를 저장하고 불러오고 삭제하는 브러우저의 작은 DB같은 API임.
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetins(savedUsername);
  // 유저정보가 local storage로부터 나오고 스크린에 정보만 띄워주는 역할.
}