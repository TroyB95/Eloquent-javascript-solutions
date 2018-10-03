function beanCounter(string, char) {
  let count = 0;
  for (let i = 0; i < string.length - 1; ++i) {
    if (string[i] === char) {
      count++;
    }
  }
  console.log(count);
}
