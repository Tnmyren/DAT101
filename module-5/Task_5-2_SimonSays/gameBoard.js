"use strict";

import {TSprite} from "libSprite"

export class TGameBoard extends TSprite{
#background
constructor(aSpcvs, aSPI){

    super(aSPI,aSpcvs);
    this.#background = new TSprite(aSpcvs, aSPI, 100, 100)


}

draw(){
    this.#background.draw()
}


}