const credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt("Cколько дроидов хотите купить?");
let totalPrice = 0;
let balance;

if (userInput === null) {
  console.log("Отменено пользователем!");
} else if (true) {
  totalPrice = userInput * pricePerDroid;
  if (totalPrice <= credits) {
    balance = credits - totalPrice;
    alert(
      `Вы купили ${userInput} дроидов, на счету осталось ${balance} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
