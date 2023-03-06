const map = new Map([ //값을 중복으로 쓸려면 키값이 중복이 아니라 유일해야된다.
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries()); //key, value 두개 같이 뽑기

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2); //map에서는 foreach등 많은 함수 사용이 가능하지만
console.log(obj[key]); // 오브젝트에서는 다양한 함수 사용이 불가하다.
console.log(map2[key]); //map은 오브젝트와 달리 직접적인 값 추출X
console.log(map2.get(key)); //get을 써야 직접적인 값 추출이 가능
