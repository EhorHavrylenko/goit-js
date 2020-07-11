let input;
const numbers = [];
let total = 0;

do {
  input = prompt("enter numbers");
  numbers.push(Number(input));
} while (input !== null);

if (numbers.length > 0) {
  for (const numb of numbers) {
    total += numb;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
