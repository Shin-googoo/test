// console.dir(document) 
// -> document에서 쓸 수 있는 항목이 모두 나온다.

// Js에서 HTML을 읽어올 뿐만 아니라, HTML 변경도 가능.

// HTML의 Id값 가져오는 방법
// -> document.getElementById("XX")
const title = document.getElementById("title"); 
// -> js에서 Id값을 가져와 HTML을 쓸 수 있게해줌.

title.innerText = "Got you!"