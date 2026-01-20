"use strict";

import {TSprite, TSpriteButton} from "libSprite" 
import { EGameStatus, StartGame } from "./FlappyBird.mjs";
export class TMeny{
    #SPflappy
    #SPplaybutt
    #leader
    constructor(aSpcvs, aSPI){
        this.#SPflappy = new TSprite(aSpcvs, aSPI.flappyBird, 320, 50)
        this.#SPplaybutt = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 300, 120)
        this.#SPplaybutt.addEventListener("click", this.btnpress.bind(this))
    }




    draw(){
        this.#SPflappy.draw();
        this.#SPplaybutt.draw();
    }

    btnpress(){
        StartGame();
        this.#SPplaybutt.hidden = true;
    }
}