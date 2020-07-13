const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const isRange = login.length > 3 && login.length < 17;

  return isRange;
};

const isLoginUnique = function (allLogins, login) {
  let unique = allLogins.includes(login);
  return unique;
};

const addLogin = function (logins, login) {
  let unvallid = isLoginValid(login);

  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (isLoginUnique(logins, login)) {
    return "Такой логин уже используется!";
  }

  logins.push(login);
  return "Логін успішно доданий!";
};

// const r1 = isLoginValid("qwertyqwerty");
// console.log(r1);

// const r2 = isLoginUnique(logins, "Poly");
// console.log(r2);

const r4 = addLogin(logins, "Zodt");
console.log(r4);

