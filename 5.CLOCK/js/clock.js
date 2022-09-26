const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
  // "1".padStart(2, "0") - 2자리수로 만들어주는데 1자리수라면 앞에 0을 붙임



  //ex)00:00이 떴다 현재 시간이 뜨는 것이 아니라 현재 시간이 바로 뜨게 해준다. 
  getClock(); // 즉시 호출! 
//Interval - '매번' 일어나야 하는 무언가! ex)어떤 것이 몇 초마다 일어나는지 
setInterval(getClock, 1000); 
//1번째 인자: 실행할 함수, 2번째 인자: 몇초