let count = 0;
export function increase() { 
  //export 준 함수만 접근을 허용해준다.
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
