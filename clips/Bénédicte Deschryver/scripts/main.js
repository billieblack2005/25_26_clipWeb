/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 115;


let audioPath = "assets/audio/MaryJane.mp3";
let sequencer;

let weed_bud1;
let weed_bud2;
let weed_bud3;
let weed_bud4;
let weed_bud5;
let weed_bud6;

let drum_sing_it;

let refrain_1;
let refrain_2;
let refrain_3;
let refrain_4;
let refrain_5;
let refrain_6;

let couplet_1; 
let couplet_2; 
let couplet_3; 
let couplet_5;
let couplet_6;
let couplet_7;

let couplet_2_1;
let couplet_2_2;
let couplet_2_3;
let couplet_2_4;

let entre_son;

let entre_son_fort;

let oh_yeah;

let yeah_yeah;

let guitaru;




















function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	imageMode(CENTER); //Mettre point d'encrage au centre de l'image (1 fois GENERAL POUR TT IMAGE)

	// INTRO
	weed_bud1 = new Animator(1, 5, "./assets/image/1_intro/w1/w_imgNum_.png")
	weed_bud1.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	weed_bud1.setPosition(width/2,height/2);

	weed_bud2 = new Animator(1, 5, "./assets/image/1_intro/w2/w_imgNum_.png")
	weed_bud2.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	weed_bud2.setPosition(width/2,height/2);

	weed_bud3 = new Animator(1, 5, "./assets/image/1_intro/w3/w_imgNum_.png")
	weed_bud3.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	weed_bud3.setPosition(width/2,height/2);

	weed_bud4 = new Animator(1, 5, "./assets/image/1_intro/w4/w_imgNum_.png")
	weed_bud4.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	weed_bud4.setPosition(width/2,height/2);

	weed_bud5 = new Animator(1, 5, "./assets/image/1_intro/w5/w_imgNum_.png")
	weed_bud5.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	weed_bud5.setPosition(width/2,height/2);

	weed_bud6 = new Animator(1, 5, "./assets/image/1_intro/w6/w_imgNum_.png")
	weed_bud6.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	weed_bud6.setPosition(width/2,height/2);




	//DRUM
	drum_sing_it = new Animator(1, 5, "./assets/image/2_sing_it/drum_sing_it/d_imgNum_.png")
	drum_sing_it.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	drum_sing_it.setPosition(width/2,height/2);




 //REFRAIN 1/2
	
	refrain_1 = new Animator(1, 6, "./assets/image/REFRAIN/1/_imgNum_.png")
	refrain_1.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	refrain_1.setPosition(width/2,height/2);

	refrain_2 = new Animator(1, 3, "./assets/image/REFRAIN/2/_imgNum_.png")
	refrain_2.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	refrain_2.setPosition(width/2,height/2);

	refrain_3 = new Animator(1, 6, "./assets/image/REFRAIN/3/_imgNum_.png")
	refrain_3.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	refrain_3.setPosition(width/2,height/2);

	refrain_4 = new Animator(1, 5, "./assets/image/REFRAIN/4/_imgNum_.png")
	refrain_4.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	refrain_4.setPosition(width/2,height/2);

	refrain_5 = new Animator(1, 7, "./assets/image/REFRAIN/5/_imgNum_.png")
	refrain_5.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	refrain_5.setPosition(width/2,height/2);

	refrain_6 = new Animator(1, 2, "./assets/image/REFRAIN/6/_imgNum_.png")
	refrain_6.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	refrain_6.setPosition(width/2,height/2);


	//ENTRE SON 1
	entre_son = new Animator(1, 9, "./assets/image/+/ENTRE_SON/_imgNum_.png")
	entre_son.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	entre_son.setPosition(width/2,height/2);


	//COUPLET 1
	couplet_1 = new Animator(1, 5, "./assets/image/COUPLET_1/1/_imgNum_.png")
	couplet_1.setSize(windowWidth, windowHeight); 
	couplet_1.setPosition(width/2,height/2);

	couplet_2 = new Animator(1, 3, "./assets/image/COUPLET_1/2/_imgNum_.png")
	couplet_2.setSize(windowWidth, windowHeight); 
	couplet_2.setPosition(width/2,height/2);

	couplet_3 = new Animator(1, 7, "./assets/image/COUPLET_1/3/_imgNum_.png")
	couplet_3.setSize(windowWidth, windowHeight); 
	couplet_3.setPosition(width/2,height/2);



	couplet_5 = new Animator(1, 6, "./assets/image/COUPLET_1/5/_imgNum_.png")
	couplet_5.setSize(windowWidth, windowHeight); 
	couplet_5.setPosition(width/2,height/2);

	couplet_6 = new Animator(1, 5, "./assets/image/COUPLET_1/6/_imgNum_.png")
	couplet_6.setSize(windowWidth, windowHeight); 
	couplet_6.setPosition(width/2,height/2);

	couplet_7 = new Animator(1, 5, "./assets/image/COUPLET_1/7/_imgNum_.png")
	couplet_7.setSize(windowWidth, windowHeight); 
	couplet_7.setPosition(width/2,height/2);



	//COUPLET 2
	couplet_2_1 = new Animator(1, 11, "./assets/image/COUPLET_2/1/_imgNum_.png")
	couplet_2_1.setSize(windowWidth, windowHeight); 
	couplet_2_1.setPosition(width/2,height/2);

	couplet_2_2 = new Animator(1, 11, "./assets/image/COUPLET_2/2/_imgNum_.png")
	couplet_2_2.setSize(windowWidth, windowHeight); 
	couplet_2_2.setPosition(width/2,height/2);

	couplet_2_3 = new Animator(1, 11, "./assets/image/COUPLET_2/3/_imgNum_.png")
	couplet_2_3.setSize(windowWidth, windowHeight); 
	couplet_2_3.setPosition(width/2,height/2);

	couplet_2_4 = new Animator(1, 13, "./assets/image/COUPLET_2/4/_imgNum_.png")
	couplet_2_4.setSize(windowWidth, windowHeight); 
	couplet_2_4.setPosition(width/2,height/2);

	//ENTRE SON FORT
	entre_son_fort = new Animator(1, 7, "./assets/image/+/ENTRE_SON_FORT/_imgNum_.png")
	entre_son_fort.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	entre_son_fort.setPosition(width/2,height/2);






	// +
	oh_yeah = new Animator(1, 4, "./assets/image/+/OH_YEAH/_imgNum_.png")
	oh_yeah.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	oh_yeah.setPosition(width/2,height/2);

	yeah_yeah = new Animator(1, 5, "./assets/image/+/YEAH_YEAH/_imgNum_.png")
	yeah_yeah.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	yeah_yeah.setPosition(width/2,height/2);

	guitaru = new Animator(1, 5, "./assets/image/REFRAIN/GUITARU/_imgNum_.png")
	guitaru.setSize(windowWidth, windowHeight); //donner la taille de l'image au navigateur
	guitaru.setPosition(width/2,height/2);




















	// INTRO

	sequencer.registerSequence({
		name : "intro 1", 
		start : 1, 
		stop : 6, 
		onStart : function (event){
			weed_bud1.show();
		}, 
		onStop : function (event){
			weed_bud1.hide();
		},
		onStep : function (event){
			weed_bud1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

 	sequencer.registerSequence({
		name : "intro 2", 
		start : 7, 
		stop : 13, 
		onStart : function (event){
			weed_bud2.show();
		}, 
		onStop : function (event){
			weed_bud2.hide();
		},
		onStep : function (event){
			weed_bud2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

	sequencer.registerSequence({
		name : "intro 3", 
		start : 14, 
		stop : 23, 
		onStart : function (event){
			weed_bud3.show();
		}, 
		onStop : function (event){
			weed_bud3.hide();
		},
		onStep : function (event){
			weed_bud3.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

sequencer.registerSequence({
		name : "intro 4", 
		start : 24, 
		stop : 30, 
		onStart : function (event){
			weed_bud4.show();
		}, 
		onStop : function (event){
			weed_bud4.hide();
		},
		onStep : function (event){
			weed_bud4.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

sequencer.registerSequence({
		name : "intro 5", 
		start : 31, 
		stop : 35, 
		onStart : function (event){
			weed_bud5.show();
		}, 
		onStop : function (event){
			weed_bud5.hide();
		},
		onStep : function (event){
			weed_bud5.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

sequencer.registerSequence({
		name : "intro 6", 
		start : 36, 
		stop : 43, 
		onStart : function (event){
			weed_bud6.show();
		}, 
		onStop : function (event){
			weed_bud6.hide();
		},
		onStep : function (event){
			weed_bud6.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});










//DRUM

sequencer.registerSequence({
		name : "drum/sing it", 
		start : 44, 
		stop : 46, 
		onStart : function (event){
			drum_sing_it.show();
		}, 
		onStop : function (event){
			drum_sing_it.hide();
		},
		onStep : function (event){
			drum_sing_it.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});











 //REFRAIN 1

sequencer.registerSequence({
		name : "refrain 1", 
		start : 47, 
		stop : 53, 
		onStart : function (event){
			refrain_1.show();
		}, 
		onStop : function (event){
			refrain_1.hide();
		},
		onStep : function (event){
			refrain_1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

sequencer.registerSequence({
		name : "refrain 2", 
		start : 54, 
		stop : 57, 
		onStart : function (event){
			refrain_2.show();
		}, 
		onStop : function (event){
			refrain_2.hide();
		},
		onStep : function (event){
			refrain_2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

sequencer.registerSequence({
		name : "refrain 3", 
		start : 58, 
		stop : 69, 
		onStart : function (event){
			refrain_3.show();
		}, 
		onStop : function (event){
			refrain_3.hide();
		},
		onStep : function (event){
			refrain_3.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

sequencer.registerSequence({
		name : "refrain 4", 
		start : 70, 
		stop : 79, 
		onStart : function (event){
			refrain_4.show();
		}, 
		onStop : function (event){
			refrain_4.hide();
		},
		onStep : function (event){
			refrain_4.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});


sequencer.registerSequence({
		name : "refrain 5", 
		start : 80, 
		stop : 87, 
		onStart : function (event){
			refrain_5.show();
		}, 
		onStop : function (event){
			refrain_5.hide();
		},
		onStep : function (event){
			refrain_5.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

sequencer.registerSequence({
		name : "refrain 6", 
		start : 88, 
		stop : 93, 
		onStart : function (event){
			refrain_6.show();
		}, 
		onStop : function (event){
			refrain_6.hide();
		},
		onStep : function (event){
			refrain_6.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});


//ENTRE SON 1
sequencer.registerSequence({
		name : "entre son 1", 
		start : 94, 
		stop : 113, 
		onStart : function (event){
			entre_son.show();
		}, 
		onStop : function (event){
			entre_son.hide();
		},
		onStep : function (event){
			entre_son.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});





//COUPLET 1

	sequencer.registerSequence({
		name : "couplet 1.1", 
		start : 114, 
		stop : 118, 
		onStart : function (event){
			couplet_1.show();
		}, 
		onStop : function (event){
			couplet_1.hide();
		},
		onStep : function (event){
			couplet_1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

	sequencer.registerSequence({
		name : "couplet 1.2", 
		start : 119, 
		stop : 124, 
		onStart : function (event){
			couplet_2.show();
		}, 
		onStop : function (event){
			couplet_2.hide();
		},
		onStep : function (event){
			couplet_2.next(true);
		}, 
		measure : 1, 
		steps : [1] 
	});

	sequencer.registerSequence({
		name : "couplet 1.3", 
		start : 125, 
		stop : 131, 
		onStart : function (event){
			couplet_3.show();
		}, 
		onStop : function (event){
			couplet_3.hide();
		},
		onStep : function (event){
			couplet_3.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

	sequencer.registerSequence({
		name : "couplet 1.4", 
		start : 132, 
		stop : 135, 
		onStart : function (event){
			oh_yeah.show();
		}, 
		onStop : function (event){
			oh_yeah.hide();
		},
		onStep : function (event){
			oh_yeah.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});


	sequencer.registerSequence({
		name : "couplet 1.5", 
		start : 136, 
		stop : 141, 
		onStart : function (event){
			couplet_5.show();
		}, 
		onStop : function (event){
			couplet_5.hide();
		},
		onStep : function (event){
			couplet_5.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

	sequencer.registerSequence({
		name : "couplet 1.6", 
		start : 142, 
		stop : 147, 
		onStart : function (event){
			couplet_6.show();
		}, 
		onStop : function (event){
			couplet_6.hide();
		},
		onStep : function (event){
			couplet_6.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

	sequencer.registerSequence({
		name : "couplet 1.7", 
		start : 148, 
		stop : 155, 
		onStart : function (event){
			couplet_7.show();
		}, 
		onStop : function (event){
			couplet_7.hide();
		},
		onStep : function (event){
			couplet_7.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

// YEAH_YEAH

	sequencer.registerSequence({
		name : "yeah yeah", 
		start : 156, 
		stop : 160, 
		onStart : function (event){
			yeah_yeah.show();
		}, 
		onStop : function (event){
			yeah_yeah.hide();
		},
		onStep : function (event){
			yeah_yeah.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});


//REFRAIN 2

 sequencer.registerSequence({
		name : "refrain 2.1", 
		start : 161, 
		stop : 166, 
		onStart : function (event){
			refrain_1.show();
		}, 
		onStop : function (event){
			refrain_1.hide();
		},
		onStep : function (event){
			refrain_1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 2.2", 
		start : 167, 
		stop : 170, 
		onStart : function (event){
			refrain_2.show();
		}, 
		onStop : function (event){
			refrain_2.hide();
		},
		onStep : function (event){
			refrain_2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 2.3", 
		start : 171, 
		stop : 180, 
		onStart : function (event){
			refrain_3.show();
		}, 
		onStop : function (event){
			refrain_3.hide();
		},
		onStep : function (event){
			refrain_3.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 2.4", 
		start : 181, 
		stop : 192, 
		onStart : function (event){
			refrain_4.show();
		}, 
		onStop : function (event){
			refrain_4.hide();
		},
		onStep : function (event){
			refrain_4.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});


 sequencer.registerSequence({
		name : "refrain 2.5", 
		start : 193, 
		stop : 201, 
		onStart : function (event){
			refrain_5.show();
		}, 
		onStop : function (event){
			refrain_5.hide();
		},
		onStep : function (event){
			refrain_5.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 2.6", 
		start : 202, 
		stop : 210, 
		onStart : function (event){
			refrain_6.show();
		}, 
		onStop : function (event){
			refrain_6.hide();
		},
		onStep : function (event){
			refrain_6.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});



//ENTRE SON 2
sequencer.registerSequence({
		name : "entre son 2", 
		start : 211, 
		stop : 248, 
		onStart : function (event){
			entre_son.show();
		}, 
		onStop : function (event){
			entre_son.hide();
		},
		onStep : function (event){
			entre_son.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});


	//COUPLET 2

	sequencer.registerSequence({
		name : "couplet 2.1", 
		start : 249, 
		stop : 259, 
		onStart : function (event){
			couplet_2_1.show();
		}, 
		onStop : function (event){
			couplet_2_1.hide();
		},
		onStep : function (event){
			couplet_2_1.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

	sequencer.registerSequence({
		name : "couplet 2.2", 
		start : 260, 
		stop : 270, 
		onStart : function (event){
			couplet_2_2.show();
		}, 
		onStop : function (event){
			couplet_2_2.hide();
		},
		onStep : function (event){
			couplet_2_2.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

	sequencer.registerSequence({
		name : "couplet 2.3", 
		start : 271, 
		stop : 281, 
		onStart : function (event){
			couplet_2_3.show();
		}, 
		onStop : function (event){
			couplet_2_3.hide();
		},
		onStep : function (event){
			couplet_2_3.next();
		}, 
		measure : 1, 
		steps : [1] 
	});

		sequencer.registerSequence({
		name : "couplet 2.4", 
		start : 282, 
		stop : 292, 
		onStart : function (event){
			couplet_2_4.show();
		}, 
		onStop : function (event){
			couplet_2_4.hide();
		},
		onStep : function (event){
			couplet_2_4.next();
		}, 
		measure : 1, 
		steps : [1] 
	});



 //ENTRE SON 3
sequencer.registerSequence({
		name : "entre son 3", 
		start : 293, 
		stop : 314, 
		onStart : function (event){
			entre_son.show();
		}, 
		onStop : function (event){
			entre_son.hide();
		},
		onStep : function (event){
			entre_son.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});





//ENTRE SON FORT
sequencer.registerSequence({
		name : "entre son fort", 
		start : 315, 
		stop : 335, 
		onStart : function (event){
			entre_son_fort.show();
		}, 
		onStop : function (event){
			entre_son_fort.hide();
		},
		onStep : function (event){
			entre_son_fort.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

//DRUM 2

sequencer.registerSequence({
		name : "drum/sing it 2", 
		start : 336, 
		stop : 339, 
		onStart : function (event){
			drum_sing_it.show();
		}, 
		onStop : function (event){
			drum_sing_it.hide();
		},
		onStep : function (event){
			drum_sing_it.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

	//REFRAIN 3

 sequencer.registerSequence({
		name : "refrain 3.1", 
		start : 340, 
		stop : 345, 
		onStart : function (event){
			refrain_1.show();
		}, 
		onStop : function (event){
			refrain_1.hide();
		},
		onStep : function (event){
			refrain_1.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 3.2", 
		start : 346, 
		stop : 349, 
		onStart : function (event){
			refrain_2.show();
		}, 
		onStop : function (event){
			refrain_2.hide();
		},
		onStep : function (event){
			refrain_2.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 3.3", 
		start : 350, 
		stop : 355, 
		onStart : function (event){
			refrain_3.show();
		}, 
		onStop : function (event){
			refrain_3.hide();
		},
		onStep : function (event){
			refrain_3.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

  sequencer.registerSequence({
		name : "refrain 3.3.2", 
		start : 356, 
		stop : 361, 
		onStart : function (event){
			guitaru.show();
		}, 
		onStop : function (event){
			guitaru.hide();
		},
		onStep : function (event){
			guitaru.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 3.4", 
		start : 362, 
		stop : 371, 
		onStart : function (event){
			refrain_4.show();
		}, 
		onStop : function (event){
			refrain_4.hide();
		},
		onStep : function (event){
			refrain_4.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});


 sequencer.registerSequence({
		name : "refrain 3.5", 
		start : 372, 
		stop : 381, 
		onStart : function (event){
			refrain_5.show();
		}, 
		onStop : function (event){
			refrain_5.hide();
		},
		onStep : function (event){
			refrain_5.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2] 
	});

 sequencer.registerSequence({
		name : "refrain 3.6", 
		start : 382, 
		stop : 388, 
		onStart : function (event){
			refrain_6.show();
		}, 
		onStop : function (event){
			refrain_6.hide();
		},
		onStep : function (event){
			refrain_6.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});

 //ENTRE SON 4
sequencer.registerSequence({
		name : "entre son 4", 
		start : 389, 
		stop : 405, 
		onStart : function (event){
			entre_son.show();
		}, 
		onStop : function (event){
			entre_son.hide();
		},
		onStep : function (event){
			entre_son.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/3, 1+2/3] 
	});


 }











function draw(){
	sequencer.update();
	background(0);

	// INTRO

	if (weed_bud1.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  weed_bud1.display(); 	// ajouter secance d'image, décide quand montrer et cacher image 

		}  

	if (weed_bud2.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  weed_bud2.display();
		}

	if (weed_bud3.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  weed_bud3.display();
		}

	if (weed_bud4.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  weed_bud4.display();
		}

	if (weed_bud5.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  weed_bud5.display();
		}
	if (weed_bud6.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  weed_bud6.display();
		}




 //DRUM

	if (drum_sing_it.visible) { //si l'anim0 est visible alors je l'affiche, lier avec anim0.show n .hide qui est dans onStart function pour apparettre et onStop function pour disparaitre
		  drum_sing_it.display();
		}


 //REFRAIN 1

	if (refrain_1.visible) { 
		  refrain_1.display();
		}
	if (refrain_2.visible) { 
		  refrain_2.display();
		}
	if (refrain_3.visible) { 
		  refrain_3.display();
		}
	if (refrain_4.visible) { 
		  refrain_4.display();
		}
	if (refrain_5.visible) { 
		  refrain_5.display();
		}
	if (refrain_6.visible) { 
		  refrain_6.display();
		}


 //ENTRE SON 1

if (entre_son.visible) { 
		  entre_son.display();
		}


 //COUPLET 1

	if (couplet_1.visible) { 
		  couplet_1.display();
		}

	if (couplet_2.visible) { 
		  couplet_2.display();
		}

	if (couplet_3.visible) { 
		  couplet_3.display();
		}

	if (couplet_5.visible) { 
		  couplet_5.display();
		}

	if (couplet_6.visible) { 
		  couplet_6.display();
		}

	if (couplet_7.visible) { 
		  couplet_7.display();
		}


	//COUPLET 2

	if (couplet_2_1.visible) { 
		  couplet_2_1.display();
		}

	if (couplet_2_2.visible) { 
		  couplet_2_2.display();
		}

	if (couplet_2_3.visible) { 
		  couplet_2_3.display();
		}

	if (couplet_2_4.visible) { 
		  couplet_2_4.display();
		}
	



		// +

	if (entre_son_fort.visible) { 
		  entre_son_fort.display();
		}

	if (oh_yeah.visible) { 
		  oh_yeah.display();
		}

	if (yeah_yeah.visible) { 
		  yeah_yeah.display();
		}

	if (guitaru.visible) { 
		  guitaru.display();
		}


}

