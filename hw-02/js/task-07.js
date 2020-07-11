// ЕЩЕ НЕ ДОДЕЛАЛ ДОП ЗАДАНИЕ! Застопорился на функции addLogin! ПОДСКАЖЕШЬ ?


const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const isRange = login.length > 4 && login.length < 16;

  return isRange;
};

const isLoginUnique = function (allLogins, login) {
  for (const log of allLogins) {
    if (log === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function (allLogins, login) {
  let unvallid = isLoginValid(login);

  if (unvallid === false) {
  return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else  if (unvallid === true) {
      let new = isLoginUnique(allLogins, login) {
         
      }
  }
};

const r1 = isLoginValid("qwertyqwerty");
console.log(r1);

const r2 = isLoginUnique(logins, "Poly");
console.log(r2);

const r4 = addLogin(logins, "Zodzod");
console.log(r4);
