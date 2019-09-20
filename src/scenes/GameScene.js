import "phaser";
import config from"../config/config";
export default class GameScene extends Phaser.Scene{
    constructor(){
        super('Game');
    }
    preload() {
    }

    create() {
        this.button1 = this.add.image(100,100,'bluebtn1');
        this.button1.setScale(.05);
        
       console.log(config);
    }

    update(time,delta){
       this.button1.y+=100/delta;
    }
      
}