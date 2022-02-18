const reverseString = function (string) {
  let newString = string;
  let word = "";
  for (var i = newString.length - 1; i >= 0; i--) {
    word += string[i];
  }
  return word;
};

// Do not edit below this linen
module.exports = reverseString;
