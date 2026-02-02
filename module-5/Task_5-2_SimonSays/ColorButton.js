"use strict";

import {TSpriteButton} from "libSprite";
import {EOctave, Notes, TSoundWave, ENoteName} from "libSound"

export class TColorButton extends TSpriteButton {
    #dst
    #Gamecenter
    #sound
constructor(aSpcvs, aSPI, aGameBoardCenter){

    super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y);
    this.#dst = aSPI.dst
    this.#Gamecenter = aGameBoardCenter;
    this.#sound = null;

}
isMouseOver(aMousePos){

const isover = super.isMouseOver(aMousePos);
if (isover){
    const dx = this.#Gamecenter.x - aMousePos.x
    const dy = this.#Gamecenter.y - aMousePos.y
    let hyp = Math.pow(dx, 2) + Math.pow(dy, 2)
    hyp = Math.sqrt(hyp);
    let inside = hyp > this.#dst.r1 && hyp < this.#dst.r2
    if (inside){
        return true;
    } else return false;
}
}
onMouseDown(){
    //no need to call super
    this.index = 1;

    if (this.#sound){
        this.#sound.play();
    }
}
onMouseUp(){
    this.index = 0;
    if (this.#sound) {
        this.#sound.stop();
    }
}

createSound(aIndex){
    if (aIndex === 0) {
        this.#sound = new TSoundWave(EOctave.Octave4, ENoteName.A)
    } else   if (aIndex === 1) {
        this.#sound = new TSoundWave(EOctave.Octave4, ENoteName.C)
    } else   if (aIndex === 2) {
        this.#sound = new TSoundWave(EOctave.Octave4, ENoteName.E)
     } else   if (aIndex === 3) {
        this.#sound = new TSoundWave(EOctave.Octave4, ENoteName.G)


}}}