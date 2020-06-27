const userCash = 23580;
const pricePerDroid = 3000;
let userInput = prompt("Сколько дроидов хочешь купить?");
let totalPrice = 0;
let balance;
let result;

if (userInput === null) {
  result = "Отменено пользователем";
} else if ((userInput = Number(userInput))) {
  totalPrice = userInput * pricePerDroid;
  if (totalPrice <= userCash) {
    balance = userCash - totalPrice;
    result = `Вы купили ${userInput} дроидов, на счету осталось ${balance} кредитов.`;
    alert(result);
  } else {
    result = "Недостаточно средств на счету!";
    alert(result);
  }
}

console.log(result);
