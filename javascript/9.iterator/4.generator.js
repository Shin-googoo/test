// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };
// 제너레이터는 생성기, 값을 생성한다
function* multipleGenerator() {//function*-> 제너레이터 쓴다는 뜻
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i); //0에서 값이 끝나 있다. -> yield가 끊어줌
      yield i ** 2; 
      //제너레이터 함수 내부의 yield는, 외부에서 사용하는 사람이 next를 호출할때까지 수행되지 않거든요
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); 
//-> 중간에 return을 해보리면 뒤에 next(); 가 있어도 실행x
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
