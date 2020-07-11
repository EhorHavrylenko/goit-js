const formatString = function (string) {
  const lenString = string.length;

  if (lenString < 40) {
    return string;
  } else {
    let cutLine = string.substring(0, 40);
    return `${cutLine}...`;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
