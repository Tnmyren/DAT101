"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let svar = 2 + 3 * (2-4)*6;
let ikke_svar = 2 + 3 *2-4*6;
let utrykk1 = "2 + 3 * (2-4)*6 = " ;
let utrykk2 = "2 + 3 *2-4*6 = ";
printOut(utrykk1 + svar);
printOut(utrykk2 + ikke_svar);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let Meters = 25;
let cm = 34;
let inches = (Meters*39.3700787) + (cm*0.393700787)
printOut("25 meter og 34cm er " + inches.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let days = 3;
let hours = 12;
let minnutes = 14;
let sek = 45;
let convert = (sek / 60) + minnutes + hours * 60 + days * 24 * 60;
printOut("3dager, 12 timer, 14 minutter og 45 sekunder = " + convert + " minutter");
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

let rate = 76 / 8.6;
let USD = 56;
let valuta = USD * rate;
let omvendt = valuta / rate;

printOut("56 USD = " + valuta.toFixed(0) + " Kroner");
printOut("495 nok = " + omvendt.toFixed(0) + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let tekst = "There is much between heaven and earth that we do not understand.";
printOut(tekst);
printOut("the text has " + tekst.length + " characters");
printOut("Bokstaven med plass nummer 19 er: " + tekst.charAt(19));
printOut("Mellom nummer 35 og 43 står det: " + tekst.substring(35, 43));
printOut("Earth starts at index: " + tekst.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let compare1 = "5 > 3 is " + (5 > 3)
let compare2 = ("7 >= 7 is " + (7 >= 7));;
let compare3 = "a > b is " + ("a" > "b");
let compare4 = "1 < a is " + (1 < "a");
let compare5 = "2500 < abc is " + ("2500" < "abc");
let compare6 = "arnee !== Thomas is " + ("arnee" !== "Thomas");
let compare7 = "2 === 5 is " + (2 === 5);
let compare8 = ('"abcd" > "bcd "' + ("abcd" > "bcd ") + " is true");

printOut(compare1);
printOut(compare2);
printOut(compare3);
printOut(compare4);
printOut(compare5);
printOut(compare6);
printOut(compare7);
printOut(compare8);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let x = Number("254")
let z = Number("57.23")
let y = parseInt("25 kroner")
printOut("254 = " + x  );
printOut("57.23 = " + z);
printOut("25 kroner = " + y);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let minimum = 1;
let maximum = 360;
let random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
printOut("Tilfeldig tall mellom 1 og 360: " + random);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let rest = 131 % 7;
let weeks = Math.floor(131 / 7);
printOut("131 days is: " + weeks + " weeks and " + rest + " days");
printOut(newLine);


