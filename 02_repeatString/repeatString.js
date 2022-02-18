/*const repeatString = function () {
  let chorus = "hey";
  return chorus.repeat(3);
};

const repeatString = function () {
  let chorus = "hey";
  return chorus.repeat(10);
};

const repeatString = function () {
  let chorus = "hey";
  return chorus.repeat(1);
};

const repeatString = function () {
  let chorus = "hey";
  return chorus.repeat(0);
};*/

const repeatString = function (word, num) {
  let chorus = word;
  if (num < 0) return (chorus = "ERROR");
  else return chorus.repeat(num);
};
// Do not edit below this line
module.exports = repeatString;
