"use strict";

import {TSprite, TSpriteButton, TSpriteNumber} from "libSprite" 
import { StartGame, EGameStatus } from "./FlappyBird.mjs";
import {TSoundFile} from "libSound";


const fnCountdown = "./Media/countDown.mp3";
const GamingRun = "./Media/running.mp3"
export class TMeny{
    #SPflappy;
    #SPplaybutt;
    #SPcountdown;
    #SFcountdown;
    #SFrunning
    constructor(aSpcvs, aSPI){
        this.#SPflappy = new TSprite(aSpcvs, aSPI.flappyBird, 320, 50)
        this.#SPplaybutt = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 350, 120)
        this.#SPplaybutt.addEventListener("click", this.btnpress.bind(this))
        this.#SPcountdown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 390, 130)
        this.#SPcountdown.value = 3;
        this.#SPcountdown.visible = false;
        this.#SFcountdown = null;
        this.#SFrunning = null;
    }




    draw(){
        
        this.#SPflappy.draw();
        this.#SPplaybutt.draw();
        this.#SPcountdown.draw();
    }

    countdown(){
        if (this.#SPcountdown.value > 1) {
            this.#SPcountdown.value--;
            setTimeout(this.countdown.bind(this), 1000)
    } else if(this.#SPcountdown.value == 1) {
    this.#SPflappy.hidden = true;
        this.#SPcountdown.visible = false; 
    this.#SFrunning = new TSoundFile(GamingRun);
    this.#SFrunning.play()
    StartGame()}
}
    btnpress(){
        setTimeout(this.countdown.bind(this), 1000)
        this.#SPplaybutt.hidden = true;
        this.#SPcountdown.visible = true;

        this.#SFcountdown = new TSoundFile(fnCountdown);
        this.#SFcountdown.play()  
    }

    stopsound(){
        this.#SFrunning.stop()
    }
}