const ftoc = function (FD) {
  let result = round((FD - 32) * (5 / 9), 1);
  //if (result % )
  return result;
};

const ctof = function (CL) {
  let result = round(CL * (9 / 5) + 32, 1);
  return result;
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
