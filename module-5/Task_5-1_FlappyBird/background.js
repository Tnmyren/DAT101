"use strict";

import { TSprite, TSpriteCanvas } from "libSprite";

export class TBackGround{
    #SpriteBackGround;
    #SpriteGround;
    constructor(aSpcvs, aSPI){
        this.#SpriteBackGround = new TSprite(aSpcvs, aSPI.background,0,0);
        this.#SpriteGround = new TSprite(aSpcvs, aSPI.ground, 0, 400);
    }

    draw(){
        this.#SpriteBackGround.draw();
        this.#SpriteGround.draw();
    }

}

