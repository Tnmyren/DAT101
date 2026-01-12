"use strict";

import { TSprite, TSpriteCanvas } from "libSprite";

export class TBackGround{
    #SpriteBackGround;
    #SpriteGround;
    constructor(aSpcvs, aSPI){
        this.#SpriteBackGround = new TSprite(aSpcvs, aSPI.background,0,0);
        const groundposy = aSPI.background.height - aSPI.ground.height;
        this.#SpriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundposy);
    }

    draw(){
        this.#SpriteBackGround.draw();
        this.#SpriteGround.draw();
    }

}




