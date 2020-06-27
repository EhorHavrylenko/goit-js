let userInput = prompt("В какую страну доставить товар?");
const normalizedInput = userInput.toLowerCase();

switch (normalizedInput) {
  case "китай":
    alert(`Доставка в ${userInput} будет стоить 100 кредитов`);
    break;

  case "чили":
    alert(`Доставка в ${userInput} будет стоить 250 кредитов`);
    break;

  case "австралия":
    alert(`Доставка в ${userInput} будет стоить 170 кредитов`);
    break;

  case "индия":
    alert(`Доставка в ${userInput} будет стоить 80 кредитов`);
    break;

  case "ямайка":
    alert(`Доставка в ${userInput} будет стоить 120 кредитов`);
    break;

  default:
    alert(`В вашей стране доставка не доступна`);
    break;
}

console.log(normalizedInput);
