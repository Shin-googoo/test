const player = {
  name:"nico",
  points: 10,
  fat: true,
};
console.log(player["name"]);

console.log(player);
player.fat = false;  
console.log(player);
// object는 수정도 가능하고 내용 추가도 가능하다.