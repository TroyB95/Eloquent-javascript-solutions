function deepCompare(val1, val2) {
  if (val1 === val2) {
    return true;
  } else if (typeof val1 === "object" && typeof val2 === "object" && val1 !== null && val2 !== null) {
    for (key in val1) {
      if (typeof val1[key] === "object") {
        deepCompare(val1[key], val2[key]);
      } else if (val2.hasOwnProperty(key)) {
        if (val1[key] === val2[key]) {
          check = true;
        } else {
          check = false;
          return check;
        }
      } else {
        check = false;
        return check;
      }
    }
    return check;
  } else {
    return false;
  }
}

let object1 = {
  hello: "goodbye"
};

let object2 = {
  hello: "goodbye"
};

deepCompare(object1, object2);
