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

$(document).ready(function() {
  let robogerized;
  $("#form").submit(function(event) {
    event.preventDefault();
    $(".result").hide();
    const input = parseInt($("input#number").val());
    // let robogerized;
    if (input >= 0) {
      robogerized = roboger(input);
    }
    else {
      alert("Please enter a valid number.")
      return false;
    }
    $(".result").text(robogerized);
    $(".result").show();
    $("#reverseButton").show();
  })
  $("#reverseButton").click(function() {
    let robogerizedReversed = robogerized.split(", ").reverse().join(", ");
    $(".result").addClass("colorize");
    $(".result").text(robogerizedReversed);
  })
})