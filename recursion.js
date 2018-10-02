function isEven(num) {
  if (num === 0) {
    console.log("Even");
  } else if (num === 1) {
    console.log("Odd");
  } else if (num < 0) {
    console.log("Number is below 0");
  } else isEven(num - 2);
}

isEven(300);
