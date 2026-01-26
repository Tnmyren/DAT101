"use strict";
// Import necessary modules
import { TSpriteCanvas } from "libSprite";
import { TBackGround } from "./background.js";
import { THero } from "./hero.js";
import { Tobstacle } from "./obstacle.js";
import { TBait } from "./bait.js";
import { TMeny } from "./Meny.js";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);

// prettier-ignore
const SpriteInfoList = {
  hero1:        { x: 0   , y: 545 , width: 34   , height: 24  , count: 4  },
  hero2:        { x: 0   , y: 569 , width: 34   , height: 24  , count: 4  },
  hero3:        { x: 0   , y: 593 , width: 34   , height: 24  , count: 4  },
  obstacle:     { x: 0   , y: 0   , width: 52   , height: 320 , count: 4  },
  background:   { x: 246 , y: 0   , width: 576  , height: 512 , count: 2  },
  flappyBird:   { x: 0   , y: 330 , width: 178  , height: 50  , count: 1  },
  ground:       { x: 246 , y: 512 , width: 1152 , height: 114 , count: 1  },
  numberSmall:  { x: 681 , y: 635 , width: 14   , height: 20  , count: 10 },
  numberBig:    { x: 422 , y: 635 , width: 24   , height: 36  , count: 10 },
  buttonPlay:   { x: 1183, y: 635 , width: 104  , height: 58  , count: 1  },
  gameOver:     { x: 0   , y: 384 , width: 226  , height: 114 , count: 1  },
  infoText:     { x: 0   , y: 630 , width: 200  , height: 55  , count: 2  },
  food:         { x: 0   , y: 696 , width: 70   , height: 65  , count: 34 },
  medal:        { x: 985 , y: 635 , width: 44   , height: 44  , count: 4  },
};

export const EGameStatus = { idle: 0, countdown: 1, gaming: 2, Heroisdead: 3, GameOver: 4,
  state: 0
};

const backGround = new TBackGround(spcvs, SpriteInfoList);
export const hero = new THero(spcvs, SpriteInfoList.hero1);
const obstacles = []
const Baits = []
export const meny = new TMeny(spcvs, SpriteInfoList)



//--------------- Functions ----------------------------------------------//


export function StartGame(){
  EGameStatus.state = EGameStatus.gaming;
  setTimeout(spawnobstacle, 1000)
  setTimeout(SpawnBait, 2000)
}

function spawnobstacle(){
  if (EGameStatus.state === EGameStatus.gaming){
  const obstacle = new Tobstacle(spcvs, SpriteInfoList.obstacle)
  obstacles.push(obstacle);
  const randomtimer = Math.ceil(Math.random() * 6) + 2;
  setTimeout(spawnobstacle, randomtimer * 500)
  }
}

function SpawnBait(){
  if (EGameStatus.state === EGameStatus.gaming){
 const bait = new TBait(spcvs, SpriteInfoList.food)
 Baits.push(bait);
 const randomtimer = Math.ceil(Math.random() * 10) + 2;
  setTimeout(SpawnBait, randomtimer * 1000)
  }
}

function animateGame() {
hero.animate();
let eaten = -1;
for(let i = 0;  i < Baits.length; i++){
    const bait = Baits[i]
     bait.animate();
    if(bait.DistanceTo(hero.center) < 40) {
    eaten = i;
    }
  
   }
   if (eaten >= 0) {
    console.log("spist emmmm")
    meny.highscore(4)
    hero.Eatensound();
    Baits.splice(eaten, 1)
   }
  
if (EGameStatus.state == EGameStatus.gaming ) {
  backGround.animate();
  let deleteob = false;
  for(let i = 0;  i < obstacles.length; i++){
    const obstacle = obstacles[i]
     obstacle.animate();
     if (obstacle.x < -65){
      deleteob = true;
     }

     }
if(deleteob){
  obstacles.splice(0, 1);
}
}

}
  


function drawGame(){

 backGround.DrawB();
 for(let i = 0;  i < Baits.length; i++){
    const bait = Baits[i]
     bait.draw();
  }
 for(let i = 0;  i < obstacles.length; i++){
    const obstacle = obstacles[i]
     obstacle.draw();
  }
 backGround.DrawG();
hero.draw();

meny.draw();
 
}


function loadGame() {
  console.log("Game Loaded");
  // Set canvas size to background size
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height; 

  // Overload the spcvs draw function here!
  spcvs.onDraw = drawGame;

  //start animate engine
  setInterval(animateGame, 10);
} // end of loadGame


function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      if (EGameStatus.state == EGameStatus.gaming)
      hero.flap()
      console.log("Space key pressed, flap the hero!");
      break;
  }
} // end of onKeyDown

function setSoundOnOff(){
  // Mute or unmute the game sound based on checkbox

} // end of setSoundOnOff

function setDayNight(aEvent){ 
  // Set day or night mode based on radio buttons
  // Day mode is when value is 1, night mode is 0, you can use this as a boolean, 1=true, 0=false
  // e.g., isDayMode = (aEvent.target.value == 1);
  console.log(`Day/Night mode changed: ${aEvent.target.value}`);

} // end of setDayNight

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

// Load the sprite sheet
spcvs.loadSpriteImage("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
