"use strict";

import {TSpriteButton} from "libSprite";


export class TColorButton extends TSpriteButton {
    #dst
    #Gamecenter
constructor(aSpcvs, aSPI, aGameBoardCenter){

    super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y);
    this.#dst = aSPI.dst
    this.#Gamecenter = aGameBoardCenter;

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



}