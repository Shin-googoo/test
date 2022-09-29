//const hellos = document.getElementsByClassName("hello");

//const title = document.getElementsByTagName("h1");
//Tag는 anchor,div,section,button 같은 것을 의미함.

const h1 = document.querySelector(".hello h1");
//querySelector는 element를 CSS방식으로 검색할 수 있다.
//querySelector은 첫번째 element만 가져온다.

//const title = document.querySelectorAll(".hello h1");
//querySelectorAll은 모든 element를 가져온다.

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier");
}

function handleWindowOffline() {
  alert("sos no WIFI");
}

function handleWindowOnline(){
  alert("ALL GOOD");
}

h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);
h1.addEventListener("click", handleTitleClick);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);