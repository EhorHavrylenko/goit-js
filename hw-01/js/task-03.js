let message;
const ADMIN_PASSWORD = "jqueryismyjam";
let adminInput = prompt("Enter Password");

if (adminInput === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (adminInput === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
console.log(message);
