const total = 100;
const ordered = 50;
let result;

if (ordered <= total) {
  result = "Заказ оформлен, с вами свяжется менеджер";
} else {
  result = "На складе недостаточно твоаров!";
}

console.log(result);
