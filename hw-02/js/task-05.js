const checkForSpam = function (message) {
  const lowStr = message.toLowerCase();

  return lowStr.includes("spam") || lowStr.includes("sale");
};

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
