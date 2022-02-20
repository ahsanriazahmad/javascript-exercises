//Worked for a single argument but not multiple
// const removeFromArray = function (list, removeNum) {
//   const newArray = [...list];
//   for (let i = 0; i < list.length; i++) {
//     if (newArray[i] == removeNum) {
//       newArray.splice(i, 1);
//       return newArray;
//     }
//   }
// };

var removeFromArray = function (...args) {
  const array = args[0];
  return array.filter((removeVal) => !args.includes(removeVal));
};

// const removeFromArray = function (list, removeNum) {
//   const newArray = [...list];
//   for (let i = 0; i < list.length; i++) {
//     if (newArray[i] == removeNum) {
//       newArray.filter(i);
//       return newArray;
//     }
//   }
// };

// Do not edit below this line
module.exports = removeFromArray;
