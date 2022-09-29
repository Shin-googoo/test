//const hellos = document.getElementsByClassName("hello");

//const title = document.getElementsByTagName("h1");
//Tag는 anchor,div,section,button 같은 것을 의미함.

const title = document.querySelector(".hello h1");
//querySelector는 element를 CSS방식으로 검색할 수 있다.
//querySelector은 첫번째 element만 가져온다.

//const title = document.querySelectorAll(".hello h1");
//querySelectorAll은 모든 element를 가져온다.

function handleTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);