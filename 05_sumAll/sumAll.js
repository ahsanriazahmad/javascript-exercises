const sumAll = function (start, end) {
  let result = 0;
  if ((start || end) === null) {
    return "ERROR";
  } else if ((start || end) < 0) {
    return "ERROR";
  } else if (typeof start == "string" || typeof end == "string") {
    return "ERROR";
  } else if (Array.isArray(start) || Array.isArray(end)) {
    return "ERROR";
    //   } else if (typeof (start || end) == "string") {
    //     return "ERROR";
  } else if (start > end) {
    for (let i = end; i <= start; i++) {
      result += i;
    }
  } else
    for (let i = start; i <= end; i++) {
      result += i;
    }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
