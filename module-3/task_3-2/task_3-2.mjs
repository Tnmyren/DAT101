"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let up = 1, down = 10; up <= 10; up++, down--) {
  printOut(up + " " + down);
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let number = 10;
let randomNumber = Math.floor(Math.random() * 45) + 1;
let forsøk = 0;

while(number !== randomNumber) {
  randomNumber = Math.floor(Math.random() * 45) + 1;
  forsøk++;
}
printOut("Matched number: " + randomNumber + " after " + forsøk + " tries");


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let number2 = 10;
let randomNumber2 = Math.floor(Math.random() * 1000000) + 1;
let forsøk2 = 0;
let ms = Date.now();

while(number2 !== randomNumber2) {
  randomNumber2 = Math.floor(Math.random() * 1000000) + 1;
  forsøk2++;
}
printOut(randomNumber2 + " after " + forsøk2 + " tries" + " it took " + ms + " ms");
printOut(newLine); 

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");;
let output = "";

for (let num = 2; num < 200; num++) { 
  let start = 2;
  let prime = true;

  while (start * start <= num) { 
    if (num % start === 0) {
      prime = false;
      break;
    }
    start++;
  }

  if (prime) output += num + " ";
}

printOut(output);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
for (let row = 1; row <= 7; row++) {      
  let line = "";
  for (let col = 1; col <= 9; col++) {    
    line += "K" + col + "R" + row + "  "; 
  }
  printOut(line); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");




for (let b = 1; b <= 5; b++) {  
let score = Math.floor(Math.random() * 236) + 1;


let prosent = (score / 236) * 100;
let grade = prosent.toFixed(0);
if (grade > 89) {
  printOut("A" + " " + prosent.toFixed(0));
}  else if  (grade > 77) {  
  printOut("B" + " " + prosent.toFixed(0));
} else if (grade > 65)  {
  printOut("C" + " " + prosent.toFixed(0));
} else if (grade > 53) {
  printOut("D" + " " + prosent.toFixed(0));
} else if (grade > 41) {
  printOut("E" + " " + prosent.toFixed(0));
} else {
  printOut("F" + " " + prosent.toFixed(0));
}
}



printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

for (let c = 1; c <= 6; c++) {  
let dice = Math.floor(Math.random() * 6) + 1;
printOut(dice);
}

 

printOut(newLine);

