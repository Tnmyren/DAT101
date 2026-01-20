"use strict";

import { TSprite, TSpriteCanvas } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import {TSineWave} from "lib2d"


export class THero extends TSprite{
    #gravity;
    #speed;
    #wave

    constructor(aSpcvs, aSPI) {
      super(aSpcvs, aSPI, 100, 100);
      this.animationSpeed = 20;
      this.#gravity = 9.81 / 100;
      this.#speed = 0;
      this.#wave = new TSineWave(1, 2);
      this.y += this.#wave.value

    }
animate(){
    const wha = EGameStatus.state === EGameStatus.gaming||
    EGameStatus.state === EGameStatus.Heroisdead
 if (wha){
    if(this.y <= 400 - this.height){
    this.#speed += this.#gravity;
    this.y += this.#speed;
    if(this.rotation <= 120) {
    this.rotation = this.#speed*15; }
    }

     else {
        EGameStatus.state = EGameStatus.GameOver
        this.animationSpeed = 0;
     }


    } else if (EGameStatus.state === EGameStatus.idle)
       this.y += this.#wave.value
} 

flap(){
    this.#speed = -2;
    this.rotation = 0;
}
}