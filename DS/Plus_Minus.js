const arr = [
  [1, 2, 3],
  [3, 2, 1],
  [2, 9, -7],
];

const n = 3;

let res = [];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i][1]);
  arr[i][0] + arr[i][1] == arr[i][2] ? res.push("+") : res.push("-");
}
console.log(res);
