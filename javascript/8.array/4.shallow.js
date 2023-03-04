// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign -> 새로운 오브젝트가 아니라 얕은 복사!
const pizza = { name: '🍕', price: 2, owner: { name: 'Ellie' } };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1); //스토어1을 복사
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi); //배열2에만 스시를 추가 해서 스토어2에만 스시 추가
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);
