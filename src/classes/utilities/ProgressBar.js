export default class ProgressBar{
    constructor(preloader){
        this.preloader = preloader;
    }
    start(){
        var pl = this.preloader;
         // add logo image
         pl.add.image(400, 200, 'logo');

         // display progress bar
         var progressBar = pl.add.graphics();
         var progressBox = pl.add.graphics();
         progressBox.fillStyle(0x222222, 0.8);
         progressBox.fillRect(240, 270, 320, 50);
 
         var width = pl.cameras.main.width;
         var height = pl.cameras.main.height;
         var loadingText = pl.make.text({
         x: width / 2,
         y: height / 2 - 50,
         text: 'Loading...',
         style: {
         font: '20px monospace',
         fill: '#ffffff'
         }
         });
         loadingText.setOrigin(0.5, 0.5);
 
         var percentText = pl.make.text({
         x: width / 2,
         y: height / 2 - 5,
         text: '0%',
         style: {
         font: '18px monospace',
         fill: '#ffffff'
         }
         });
         percentText.setOrigin(0.5, 0.5);
 
         var assetText = pl.make.text({
         x: width / 2,
         y: height / 2 + 50,
         text: '',
         style: {
         font: '18px monospace',
         fill: '#ffffff'
         }
         });
         assetText.setOrigin(0.5, 0.5);
 
         // update progress bar
         pl.load.on('progress', function (value) {
         percentText.setText(parseInt(value * 100) + '%');
         progressBar.clear();
         progressBar.fillStyle(0xffffff, 1);
         progressBar.fillRect(250, 280, 300 * value, 30);
         });
 
         // update file progress text
         pl.load.on('fileprogress', function (file) {
             assetText.setText('Loading asset: ' + file.key);
         });
 
         // remove progress bar when complete
         pl.load.on('complete', function () {
             progressBar.destroy();
             progressBox.destroy();
             loadingText.destroy();
             percentText.destroy();
             assetText.destroy();
         }.bind(pl));
         
    }
}