


function roboger(num) {
  let numArray = []
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
  }

  return numArray.join(", ")
}

console.log(roboger(10));