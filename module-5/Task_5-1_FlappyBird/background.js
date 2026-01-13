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

    DrawB(){
        this.#SpriteBackGround.draw();
    }
    
    DrawG(){
    this.#SpriteGround.draw();
    }

    animate(){
        const x = this.#SpriteGround.x + (this.#SpriteGround.width / 2);
      if (x < 5){
        this.#SpriteGround.x = 0;
        
      } else{
        this.#SpriteGround.x--;
      }
    }
    }




