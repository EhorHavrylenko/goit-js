let inputUser;
let total = 0;

do {
  let inputUser = prompt("Введите число");

  if (inputUser === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  inputUser = Number(inputUser);

  const notANumber = Number.isNaN(inputUser);

  if (notANumber) {
    alert("Вы ввели не число!");
    continue;
  }

  total += inputUser;
} while (true);

console.log(`Общая сумма чисел равна ${total}`);
