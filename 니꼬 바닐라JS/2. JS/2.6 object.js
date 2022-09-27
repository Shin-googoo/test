const player = {
  name: "nico",
  points: 10,
  fat: true,

};
console.log(player);
player.fat = false;
console.log(player);

console.log(player);
player.points = player.points + 15;
console.log(player);