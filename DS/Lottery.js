let n = 144903595;

const arr = [100, 20, 10, 5, 1];

let count = 0;
arr.forEach((a) => {
  count += Math.floor(n / a);
  n = n % a;
});
console.log(count);
