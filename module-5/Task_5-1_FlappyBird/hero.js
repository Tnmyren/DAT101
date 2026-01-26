"use strict";

import { TSprite, TSpriteCanvas } from "libSprite";
import { EGameStatus, meny } from "./FlappyBird.mjs";
import {TSineWave} from "lib2d"
import {TSoundFile} from "libSound";

const FNeaten = "./Media/food.mp3";
const FNfalling = "./Media/heroisdead.mp3";
const FNhasfallen = "./Media/gameover.mp3";

export class THero extends TSprite{
    #gravity;
    #speed;
    #wave
    #SFeaten
    #SFfalling
    #SFfallen

   
    constructor(aSpcvs, aSPI) {
      super(aSpcvs, aSPI, 100, 100);
      this.animationSpeed = 20;
      this.#gravity = 9.81 / 100;
      this.#speed = 0;
      this.#wave = new TSineWave(1, 2);
      this.y += this.#wave.value
      this.#SFeaten = null;
       this.#SFfalling = null;
    this. #SFfallen = null;

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
        this.#SFfalling = new TSoundFile(FNfalling);
        this.#SFfalling.play()
        
        
        
        
     }


    } else if (EGameStatus.state === EGameStatus.idle)
       this.y += this.#wave.value
} 

flap(){
    this.#speed = -2;
    this.rotation = 0;
}

Eatensound(){
    if (this.#SFeaten === null) {
          this.#SFeaten = new TSoundFile(FNeaten);
 }
 else {
 } this.#SFeaten.play()
} 

dead(){
    this.#SFfallen = new TSoundFile(FNhasfallen);
        this.#SFfallen.play()
}



}

