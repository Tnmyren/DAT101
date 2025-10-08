"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school."); }
  else if (wakeUpTime == 8) { printOut("I can Take the train to school.");}
else printOut("i have to take my car to school.");
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
let number = 0;
if (number > 0) {
printOut("The number is positive."); }
else if (number < 0) { printOut("The number is negative.");}
else printOut("The number is zero.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let random = Math.random(1,8) * 10;
if (random.toFixed(0) >= 4) {
  printOut("Thank you");}
else printOut("The image is too small")
/* test for å se at nummer stemmer med teskt printOut(random.toFixed(0)); */
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let random2 = Math.random(1,8) * 10; 
if (random2.toFixed(0) <= 4) {
  printOut("Image is to small"); }
  else if (random2.toFixed(0) >= 6)
    printOut("image is to big");
else printOut("Thank you");
/* test for å se at nummer stemmer med teskt printOut(random2.toFixed(0)); */
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const daysinmonth = [ "january has 31 days", "February has 28 days", "Mars has 31 days", "April has 30 days", "Mai has 31 days",
"Jun has 30 days", "Juli has 31 days", "August has 31 days", "September has 30 days", "October has 31 days", "November has 30 days", "December has 31 days"

]
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.toLowerCase().includes("r"))
printOut("You must take vitamin D");
else printOut("You don't need vitamin D");
printOut(monthName);
printOut( daysinmonth[monthList.indexOf(monthName)]);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let noOfMonth2 = monthList.length;
let monthName2 = monthList[Math.floor(Math.random() * noOfMonth2)];


if (monthName2 == "Mars" || monthName2 == "Mai"){
  printOut("the gallery is closed");}

else if (monthName2 == "April"){
  printOut("Themp access from building next door");}
  
else printOut("the gallery is open");{
printOut(monthName2);}




printOut(newLine);

/* Task 11*/
printOut("--- Part 11 ---------------------------------------------------------------------------------------------")

let animal = "cow";

switch (animal) {
  case "cat":
    printOut("Meow");;
    break;
  case "cow":
    printOut("Moo");
    break;
  case "dog":
    printOut("Woof");
    }
    