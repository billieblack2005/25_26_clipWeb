/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 135;
let audioPath = "assets/audio/Somebody-Pay-Nina.mp3";
let sequencer;
let photo;
let anim0;
let bg = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
   
	sequencer = new Sequencer(audioPath, BPM, false);

    photo = new Animator(0,1,"./assets/images/photos/Photo252.jpg");
    photo.show()
    photo.setSize(windowWidth, windowHeight)

	anim0= new Animator(0,325,"./assets/images/ordre/_imgNum_.jpg")
    anim0.setSize(windowWidth, windowHeight);
    imageMode(CENTER);
    anim0.setPosition(width/2,height/2);
	sequencer.registerSequence({
		name : "images", 
		start : 1, 
		stop : 325, 
		onStart : function (event){
            anim0.show();
        }, 
        onStop : function (event){
            anim0.hide();
        },
        onStep : function (event){
            anim0.next(true);
        }, 
        measure : 1, 
        steps : [1]
    });
}

function draw(){
    sequencer.update();
imageMode(CORNER);
    background(photo.imgs[0]);
imageMode(CENTER);

if(anim0.visible){
    anim0.display();
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    photo.setSize(windowWidth, windowHeight);
    anim0.setSize(windowWidth, windowHeight);
    anim0.setPosition(width / 2, height / 2);
}