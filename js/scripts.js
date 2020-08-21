function roboger(num) {
  let numArray = []
  for (let i = 0; i <= num; i++) {
    numArray.push(i.toString());
  }
  let j = 0;
  numArray.forEach(function(number) {
    if (number.indexOf('1') > -1) {
      numArray[j] = "Beep!";
      console.log("There's a 1 here");
    }
    j++
  })
  return numArray.join(", ")
}

console.log(roboger(30));