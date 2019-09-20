import "phaser";
import blueBtn1 from "../assets/ui/blue_button01.png";
import blueBtn2 from "../assets/ui/blue_button02.png"

import ProgressBar from "../classes/utilities/ProgressBar";

export default class PreloadderScene extends Phaser.Scene{
    constructor(){
        super('Preloader');
    }
    preload () {
        let progressbar = new ProgressBar(this);
        progressbar.start();
        
        this.load.image('bluebtn1',blueBtn1);
        this.load.image('bluebtn2',blueBtn2); 

    }
    create() {
        this.scene.start('Title');
    }
      

    init () {
    this.readyCount = 0;
    }
    
    ready () {
        this.readyCount++;
        if (this.readyCount === 2) {
            this.scene.start('Title');
        }
    }
}