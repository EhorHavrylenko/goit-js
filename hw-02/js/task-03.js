const findLongestWord = function (string) {
  const strSplit = string.split(" ");
  let longgestWord = strSplit[0];

  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i].length > longgestWord.length) {
      longgestWord = strSplit[i];
    }
  }

  return longgestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
