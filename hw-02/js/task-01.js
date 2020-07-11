const logItems = function (array) {
  let numberElement = 0;

  for (const arr of array) {
    numberElement += 1;
    console.log(`${numberElement} - ${arr}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
