"use strict";

import { TSprite, TSpriteCanvas } from "libSprite";

class TBackGround{
    #SpriteBackGround;
    #SpriteGround;
    constructor(aSpcvs, aSPI){
        this.#SpriteBackGround = new TSprite(aSpcvs, aSPI.background,0,0)
    }

    draw(){
        this.#SpriteBackGround.draw();
    }
}