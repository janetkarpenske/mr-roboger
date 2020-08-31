# Mr. Roboger's Neighborhood

#### Returns a list of numbers with phrases replacing ones that contain a specific value. Created On: 8/21/2020, Updated Last: 8/21/2020

#### By Janet Karpenske

## Description

This program prints out a list of numbers from 0 to the number entered by the user, however if a number contains a "1" it prints "beep", if it contains a "2" it prints "boop" and if it contains a "3" it prints "Won't you be my neighbor?"

## Link To Active Site:
https://janetkarpenske.github.io/mr-roboger/

## Specifications
|Specs| Description | Input Example | Output |
|--|-------------|---------------|--------|
|1| Program returns a range of numbers from 0 to the input number. | Input = 5 | 0, 1, 2, 3, 4, 5 |
|2| If a number contains a 1 the entire number is replaced with "beep". | 1 | 0, "Beep" |
|3| If a number contains a 2 the entire number is replaced with "boop". | 2 | 0, "Beep", "Boop" |
|4| If a number contains a 3 the entire number is replaced with "Won't you be my neighbor?" | 3 | 0, "Beep", "Boop", "Won't you be my neighbor?" |
|5| If a number contains more than one of these special numbers, the rule for 3 will take precedence over the rule for 2, and 2 will take precedence over 1. | 3 | 0, "Beep", "Boop", "Won't you be my neighbor?"|

## Tests
### Test 1
Describe: roboger() </br>
Test: "It returns a range of numbers up to the input number." </br>
Expect(roboger(5)).toEqual(0, 1, 2, 3, 4, 5);

### Test 2
Describe: roboger() </br>
Test: "It returns "beep" if a number contains a 1." </br>
Expect(roboger(1)).toEqual(0, "Beep");

### Test 3
Describe: roboger() </br>
Test: "It returns "boop" if a number contains a 2." </br>
Expect(roboger(2)).toEqual(0, "Beep", "Boop");

### Test 4
Describe: roboger() </br>
Test: "It returns "Won't you be my neighbor?" if a number contains a 3." </br>
Expect(roboger(3)).toEqual(0, "Beep", "Boop", "Won't you be my neighbor?");

### Test 5
Describe: roboger() </br>
Test: "It returns numbers with respect to the number 3 taking priority, then 2, then 1." </br>
Expect(roboger(3)).toEqual(0, "Beep", "Boop", "Won't you be my neighbor?");

## Setup/Installation Requirements

* Download or Clone project from Github repository (click button that says "Clone" or "Download") OR click link to view the active site located in README.md file (see above). 
* If cloned/downloaded: Open index.html file with live server to view webpage, OR open scripts.js, styles.css, or index.html to view code.

## Known Bugs

No Known Bugs

## Support and contact details

https://github.com/janetkarpenske

## Technologies Used

Javascript, HTML, and CSS were used in the creation of this project. Bootstrap and JQuery libraries were also used.

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Janet Karpenske** _Mr. Roboger's Neighborhood_