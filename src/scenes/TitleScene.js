import "phaser";

export default class TitleScene extends Phaser.Scene{
    constructor(){
        super('Title');
    }
    preload() {
    }

    create() {
        //for now skip to the game
        this.scene.start('Game');
    }
      
}