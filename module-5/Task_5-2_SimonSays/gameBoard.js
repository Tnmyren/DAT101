"use strict";

import {TSprite} from "libSprite"
import {TPoint} from "lib2d"
import { TColorButton } from "./ColorButton.js";

export class TGameBoard extends TSprite{

    #colorButtons; 
constructor(aSpcvs, aSPI){

    super(aSpcvs, aSPI.Background, 0, 0);
    const center =  new TPoint(aSPI.Background.width / 2, aSPI.Background.height / 2)
    this.#colorButtons = [
        new TColorButton(aSpcvs, aSPI.ButtonYellow, center),
        new TColorButton(aSpcvs, aSPI.ButtonRed, center),
        new TColorButton(aSpcvs, aSPI.ButtonBlue, center),
        new TColorButton(aSpcvs, aSPI.ButtonGreen, center),
    ]

}

draw(){
    super.draw();
    for(let i = 0; i < this.#colorButtons.length; i++) {
    const ColorButton = this.#colorButtons[i];
    ColorButton.draw() 
}}




}