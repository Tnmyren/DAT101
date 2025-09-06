"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let svar = 2 + 3 * (2-4)*6;
let ikke_svar = 2 + 3 *2-4*6;
let utrykk1 = "2 + 3 * (2-4)*6 = " ;
let utrykk2 = "2 + 3 *2-4*6 = ";
printOut(utrykk1);
printOut(svar);
printOut(utrykk2);
printOut(ikke_svar);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let Meters = 25;
let cm = 34;
let inches = (Meters*39.3700787) + (cm*0.393700787)
printOut(inches.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let days = 3;
let hours = 12;
let minnutes = 14;
let sek = 45;
let convert = (sek / 60) + minnutes + hours * 60 + days * 24 * 60;
printOut(convert);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let min = 6322.52;
let convertsek = min * 60;
let converthours = min / 60;
let convertdays = converthours / 24;
printOut("Sek: " +convertsek.toFixed(2));
printOut("Minutes: " + min);
printOut("Hours: " + converthours.toFixed(2));
printOut("Days: " + convertdays.toFixed(2));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

let rate = 8.6 / 76;
let nok = 56;
let valuta = nok * rate;
let omvendt = valuta / rate;

printOut(valuta.toFixed(0) + " USD");
printOut(omvendt.toFixed(0) + " Kroner");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let tekst = "There is much between heaven and earth that we do not understand.";

printOut(tekst.length);
printOut(tekst.charAt(19));
printOut(tekst.substring(35, 43));
printOut(tekst.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let compare1 = 5 > 3;
let compare2 = 7 >= 7;
let compare3 = "a" > "b";
let compare4 = 1 < "a";
let compare5 = 2500 < "abc";
let compare6 = "arnee" != "Thomas";
let compare7 = 2 === 5;
let compare8 = "abcd" > "bcd";

console.log(compare1,compare2,compare3,compare4,compare5,compare6,compare7,compare8);
//printOut(compare1,compare2,compare3,compare4,compare5,compare6,compare7,compare8);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let x = Number("254")
let z = Number("5723")
let y = parseInt("25 kroner")
printOut(x);
printOut(z);
printOut(y);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let minimum = 1;
let maximum = 360;
let random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
printOut(random);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let rest = 131 % 7;
let weeks = Math.floor(131 / 7);
printOut(weeks + " weeks");
printOut(rest + " days");
printOut(newLine);


