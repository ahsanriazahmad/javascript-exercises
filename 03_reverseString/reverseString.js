const reverseString = function () {
  let string = "hello";
  let word = "";
  for (var i = string.length - 1; i >= 0; i--) {
    word += string[i];
  }
  return word;
};

// Do not edit below this linen
module.exports = reverseString;
