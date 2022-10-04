const form = document.querySelector(".numform"),
      range = document.querySelector(".rangeInput"),
      inputNum = form.querySelector(".inputNum"),
      maxNum = document.querySelector(".maxNum"),
      paintChose = document.querySelector(".paintChose"),
      paintResult = document.querySelector(".paintResult");

function result(myNum, randNum){
  paintChose.innerText = 'You chose: ${myNum}, the machine chose: ${randNum}';
  myNum = parseInt(myNum);
  if (myNum === randNum){
    paintResult.innerText = 'You won!';
  } else if(myNum >randNum || myNum < 0){
    paintResult.innerText = `This is wrong Number`;
  } else {
    paintResult.innerText = `you lose!`;
  }
}

function makeRandNum(e) {
  e.preventDefault();
  const myNum = inputNum.value;
  const maxValue = range.value;
  const randNum = Math.ceil(Math.random() * maxValue);

  result(myNum, randNum);
}

function handleInput(){
  const maxNumValue = range.value;

  maxNum.innerText = `${maxNumValue}`;
  form.addEventListener(submit. makeRandNum);
}

function init(){
  range.oninput = handleInput;
}

init();
