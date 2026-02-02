"use strict";

import {TSprite, TSpriteButton} from "libSprite"
import {TPoint, TCircle } from "lib2d"
import { TColorButton } from "./ColorButton.js";
import {activateAudioContext} from "libSound"

export class TGameBoard extends TSprite{

    #colorButtons; 
    #startgame;
    #IsSoundEnabled
constructor(aSpcvs, aSPI){

    super(aSpcvs, aSPI.Background, 0, 0);
    const center =  new TPoint(aSPI.Background.width / 2, aSPI.Background.height / 2)
    this.#colorButtons = [
        new TColorButton(aSpcvs, aSPI.ButtonYellow, center),    
        new TColorButton(aSpcvs, aSPI.ButtonRed, center),
        new TColorButton(aSpcvs, aSPI.ButtonBlue, center),
        new TColorButton(aSpcvs, aSPI.ButtonGreen, center),
    ]

    this.#startgame = new TSpriteButton(aSpcvs, aSPI.ButtonStartEnd, aSPI.Background.width / 4, aSPI.Background.height / 4)
    this.#startgame.onClick = this.#gameinfoclick.bind(this)
    this.#disablecolorclick(true);
    this.#IsSoundEnabled = false;
}



draw(){
    super.draw();
    for(let i = 0; i < this.#colorButtons.length; i++) {
    const ColorButton = this.#colorButtons[i];
    ColorButton.draw() 
    this.#startgame.draw()
}}

#disablecolorclick(aDisable){
    for(let i = 0; i < this.#colorButtons.length; i++) {
        const ColorButton = this.#colorButtons[i];
         ColorButton.disabled = aDisable;
    }
}

#gameinfoclick(){
    this.#startgame.disable = true
    this.#startgame.hidden = true
    this.#disablecolorclick(false);
    if (this.#IsSoundEnabled === false) {
        activateAudioContext();
        this.#IsSoundEnabled = true;
        for(let i = 0; i < this.#colorButtons.length; i++) {
            const ColorButton = this.#colorButtons[i];
            ColorButton.createSound(i)
        }
    }
}
changesound(){
    if (this.#colorButtons = aSPI.ButtonYellow){
        createSound(2)
        console.log(createSound(aIndex))
    }
}




}