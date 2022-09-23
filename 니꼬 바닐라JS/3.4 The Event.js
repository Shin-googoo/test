const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
  h1.style.color = "blue";
}


h1.addEventListener("click", handleTitleClick);
