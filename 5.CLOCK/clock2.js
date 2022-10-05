const clock = document.querySelector("h2#clock");
// = const clock = document.querySelectorById("clock");

function getClock() {
  const date = new Date();
  const hours = String( date.getHours().padStart(2,"0"));
  const minutes = String( date.getMinutes().padStart(2,"0"));
  const seconds = String( date.getSeconds().padStart(2,"0"));
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 00:00:00이 떠있다가 현재 시간이 뜨는걸 즉시 호출 해준다.
setInterval(getClock, 1000);
// new Date() -> 현재 날짜와 시간을 가져옴.

// string에 문자 2개로 채우기
// padStart() -> string에 쓸 수 있는 function.
// ex) "1".padStart(2, "0") - 1이 두자리 숫자가 아니라면 앞에 0 붙여줘!
// ex) "1".padEnd(2, "0") - 1이 두자리 숫자가 아니라면 뒤에 0 붙여줘!