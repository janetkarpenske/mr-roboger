function roboger(num) {
  let numArray = []
  for (let i = 0; i <= num; i++) {
    numArray.push(i.toString());
  }
  let j = 0;
  numArray.forEach(function(number) {
    if (number.indexOf('3') > -1) {
      numArray[j] = "Won't you be my neighbor?";
    }
    else if (number.indexOf('2') > -1) {
      numArray[j] = "Boop!";
    }
    else if (number.indexOf('1') > -1) {
      numArray[j] = "Beep!";
    }
    else {}
    j++
  })
  return numArray.join(", ")
}

console.log(roboger(30));
