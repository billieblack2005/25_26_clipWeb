/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 139;
let audioPath = "assets/audio/Sweeping Promises - Throw of the Dice (Official Audio).mp3";
let refrain1;
let refrain3;
let refrain2;
let refrain4;
let run1;
let run2;
let run3;
let run4;
let run5;
let run6;
let run7;
let run8;
let run9;
let run10;
let run11;
let run12;
let intro;
let couplet_1;
let couplet_2;
let couplet_3;
let couplet_4;

let couplet2_1;
let couplet2_2;
let couplet2_3;
let couplet2_4;
let couplet2_4B;

let couplet3_1;
let couplet3_2;
let couplet3_3;
let couplet3_4;
let couplet3_5;

let outro;
let fin;
let sequencer;
let background;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	sequencer = new Sequencer(audioPath, BPM, false);

	imageMode(CENTER);
	refrain1= new Animator(1,4,"./assets/Images/Anim1/_imgNum_.png")
	refrain1.setSize(width, height);
	refrain1.setPosition(0, 0)
	refrain2= new Animator(1,4,"./assets/Images/Anim2/_imgNum_.png")
	refrain2.setSize(width, height);
	refrain2.setPosition(0, 0)
	refrain3= new Animator(1,4,"./assets/Images/Anim4/_imgNum_.png")
	refrain3.setSize(width, height);
	refrain3.setPosition(0, 0)
	refrain4= new Animator(1,4,"./assets/Images/Anim5/_imgNum_.png")
	refrain4.setSize(width, height);
	refrain4.setPosition(0, 0)
	run1= new Animator(1,4,"./assets/Images/Anim14/_imgNum_.png")
	run1.setSize(width, height);
	run1.setPosition(0, 0)
	run2= new Animator(1,4,"./assets/Images/Anim15/_imgNum_.png")
	run2.setSize(width, height);
	run2.setPosition(0, 0)
	run3= new Animator(1,4,"./assets/Images/Anim19/_imgNum_.png")
	run3.setSize(width, height);
	run3.setPosition(0, 0)
	run4= new Animator(1,4,"./assets/Images/Anim20/_imgNum_.png")
	run4.setSize(width, height);
	run4.setPosition(0, 0)
	intro= new Animator(1,8,"./assets/Images/Anim3/_imgNum_.png")
	intro.setSize(width, height);
	intro.setPosition(0, 0)
	couplet_1= new Animator(1,4,"./assets/Images/Anim6/_imgNum_.png")
	couplet_1.setSize(width, height);
	couplet_1.setPosition(0, 0)
	couplet_2= new Animator(1,4,"./assets/Images/Anim7/_imgNum_.png")
	couplet_2.setSize(width, height);
	couplet_2.setPosition(0, 0)
	couplet_3= new Animator(1,4,"./assets/Images/Anim8/_imgNum_.png")
	couplet_3.setSize(width, height);
	couplet_3.setPosition(0, 0)
	couplet_4= new Animator(1,4,"./assets/Images/Anim9/_imgNum_.png")
	couplet_4.setSize(width, height);
	couplet_4.setPosition(0, 0)
	couplet2_1= new Animator(1,8,"./assets/Images/Anim10/_imgNum_.png")
	couplet2_1.setSize(width, height);
	couplet2_1.setPosition(0, 0)
	couplet2_2= new Animator(1,8,"./assets/Images/Anim11/_imgNum_.png")
	couplet2_2.setSize(width, height);
	couplet2_2.setPosition(0, 0)
	couplet2_3= new Animator(1,8,"./assets/Images/Anim12/_imgNum_.png")
	couplet2_3.setSize(width, height);
	couplet2_3.setPosition(0, 0)
	couplet2_4= new Animator(1,8,"./assets/Images/Anim13/_imgNum_.png")
	couplet2_4.setSize(width, height);
	couplet2_4.setPosition(0, 0)
	couplet2_4B= new Animator(1,8,"./assets/Images/Anim13B/_imgNum_.png")
	couplet2_4B.setSize(width, height);
	couplet2_4B.setPosition(0, 0)
	couplet3_1= new Animator(1,16,"./assets/Images/Anim16/_imgNum_.png")
	couplet3_1.setSize(width, height);
	couplet3_1.setPosition(0, 0)
	couplet3_2= new Animator(1,4,"./assets/Images/Anim17/_imgNum_.png")
	couplet3_2.setSize(width, height);
	couplet3_2.setPosition(0, 0)
	couplet3_3= new Animator(1,4,"./assets/Images/Anim18/_imgNum_.png")
	couplet3_3.setSize(width, height);
	couplet3_3.setPosition(0, 0)
	couplet3_4= new Animator(1,8,"./assets/Images/Anim28/_imgNum_.png")
	couplet3_4.setSize(width, height);
	couplet3_4.setPosition(0, 0)
	couplet3_5= new Animator(1,8,"./assets/Images/Anim29/_imgNum_.png")
	couplet3_5.setSize(width, height);
	couplet3_5.setPosition(0, 0)

	run5= new Animator(1,8,"./assets/Images/Anim21/_imgNum_.png")
	run5.setSize(width, height);
	run5.setPosition(0, 0)
	run6= new Animator(1,8,"./assets/Images/Anim22/_imgNum_.png")
	run6.setSize(width, height);
	run6.setPosition(0, 0)
	run7= new Animator(1,8,"./assets/Images/Anim24/_imgNum_.png")
	run7.setSize(width, height);
	run7.setPosition(0, 0)
	run8= new Animator(1,8,"./assets/Images/Anim25/_imgNum_.png")
	run8.setSize(width, height);
	run8.setPosition(0, 0)
	run9= new Animator(1,8,"./assets/Images/Anim26/_imgNum_.png")
	run9.setSize(width, height);
	run9.setPosition(0, 0)
	run10= new Animator(1,8,"./assets/Images/Anim27/_imgNum_.png")
	run10.setSize(width, height);
	run10.setPosition(0, 0)
	run11= new Animator(1,8,"./assets/Images/Anim26B/_imgNum_.png")
	run11.setSize(width, height);
	run11.setPosition(0, 0)
	run12= new Animator(1,8,"./assets/Images/Anim27B/_imgNum_.png")
	run12.setSize(width, height);
	run12.setPosition(0, 0)
	outro= new Animator(1,8,"./assets/Images/Anim23/_imgNum_.png")
	outro.setSize(width, height);
	outro.setPosition(0, 0)
	fin= new Animator(1,12,"./assets/Images/Anim30/_imgNum_.png")
	fin.setSize(width, height);
	fin.setPosition(0, 0)

	background= new Animator(1,4,"./background.png")
	background.setSize(width, height);
	background.setPosition(0, 0)



		sequencer.registerSequence({
		name : "background", 
		start : 4, 
		stop : 400, 
		onStart : function (event){
			background.show();
		}, 
		onStop : function (event){
			background.hide();
		},
		measure : 1, 
		steps : [1]
	});


		sequencer.registerSequence({
		name : "intro", 
		start : 4, 
		stop : 18, 
		onStart : function (event){
			intro.show();
		}, 
		onStop : function (event){
			intro.hide();
		},
		onStep : function (event){
			intro.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});


		sequencer.registerSequence({
		name : "couplet_1", 
		start : 19, 
		stop : 26, 
		onStart : function (event){
			couplet_1.show();
		}, 
		onStop : function (event){
			couplet_1.hide();
		},
		onStep : function (event){
			couplet_1.next();
		}, 
		//measure : 3, 
		measure : 2, 
		//steps : [1]
		steps : [1+23/24]
	});


		sequencer.registerSequence({
		name : "couplet_2", 
		start : 27, 
		stop : 34, 
		onStart : function (event){
			couplet_2.show();
		}, 
		onStop : function (event){
			couplet_2.hide();
		},
		onStep : function (event){
			couplet_2.next();
		}, 
		//measure : 3, 
		measure : 2, 
		//steps : [1]
		steps : [1+23/24]
	});


		sequencer.registerSequence({
		name : "couplet_3", 
		start : 35, 
		stop : 42, 
		onStart : function (event){
			couplet_3.show();
		}, 
		onStop : function (event){
			couplet_3.hide();
		},
		onStep : function (event){
			couplet_3.next();
		}, 
		//measure : 3, 
		measure : 2, 
		//steps : [1]
		steps : [1+23/24]
	});


	sequencer.registerSequence({
		name : "couplet_4", 
		start : 43, 
		stop : 50, 
		onStart : function (event){
			couplet_4.show();
		}, 
		onStop : function (event){
			couplet_4.hide();
		},
		onStep : function (event){
			couplet_4.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
		
	});

	sequencer.registerSequence({
		name : "premier refrain 1", 
		start : 51, 
		stop : 58, 
		onStart : function (event){
			refrain1.show();
		}, 
		onStop : function (event){
			refrain1.hide();
		},
		onStep : function (event){
			refrain1.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});



	sequencer.registerSequence({
		name : "premier refrain 2", 
		start : 59, 
		stop : 66, 
		onStart : function (event){
			refrain2.show();
		}, 
		onStop : function (event){
			refrain2.hide();
		},
		onStep : function (event){
			refrain2.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});


	sequencer.registerSequence({
		name : "premier refrain 3", 
		start : 67, 
		stop : 74, 
		onStart : function (event){
			//flipX = -1;
			refrain3.show();
		}, 
		onStop : function (event){
			//flipX = 1;
			refrain3.hide();
		},
		onStep : function (event){
			refrain3.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});


	sequencer.registerSequence({
		name : "premier refrain 4", 
		start : 75, 
		stop : 82, 
		onStart : function (event){
			refrain4.show();
		}, 
		onStop : function (event){
			refrain4.hide();
		},
		onStep : function (event){
			refrain4.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "premier run1", 
		start : 83, 
		stop : 90, 
		onStart : function (event){
			run1.show();
		}, 
		onStop : function (event){
			run1.hide();
		},
		onStep : function (event){
			run1.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});
	sequencer.registerSequence({
		name : "premier run3", 
		start : 91, 
		stop : 98, 
		onStart : function (event){
			run3.show();
		}, 
		onStop : function (event){
			run3.hide();
		},
		onStep : function (event){
			run3.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});
	sequencer.registerSequence({
		name : "premier run2", 
		start : 99, 
		stop : 106, 
		onStart : function (event){
			run2.show();
		}, 
		onStop : function (event){
			run2.hide();
		},
		onStep : function (event){
			run2.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});
	sequencer.registerSequence({
		name : "premier run4", 
		start : 107, 
		stop : 114, 
		onStart : function (event){
			run4.show();
		}, 
		onStop : function (event){
			run4.hide();
		},
		onStep : function (event){
			run4.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

	



	sequencer.registerSequence({
		name : "couplet2_1", 
		start : 115, 
		stop : 122, 
		onStart : function (event){
			couplet2_1.show();
		}, 
		onStop : function (event){
			couplet2_1.hide();
		},
		onStep : function (event){
			couplet2_1.next();
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "couplet2_2", 
		start : 123, 
		stop : 130, 
		onStart : function (event){
			couplet2_2.show();
		}, 
		onStop : function (event){
			couplet2_2.hide();
		},
		onStep : function (event){
			couplet2_2.next();
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "couplet2_3", 
		start : 131, 
		stop : 138, 
		onStart : function (event){
			couplet2_3.show();
		}, 
		onStop : function (event){
			couplet2_3.hide();
		},
		onStep : function (event){
			couplet2_3.next();
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "couplet2_4", 
		start : 139, 
		stop : 146, 
		onStart : function (event){
			couplet2_4.show();
		}, 
		onStop : function (event){
			couplet2_4.hide();
		},
		onStep : function (event){
			couplet2_4.next();
		}, 
		measure : 1, 
		steps : [1]
	});




	sequencer.registerSequence({
		name : "deuxieme refrain 1", 
		start : 147, 
		stop : 154, 
		onStart : function (event){
			refrain1.show();
		}, 
		onStop : function (event){
			refrain1.hide();
		},
		onStep : function (event){
			refrain1.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});



	sequencer.registerSequence({
		name : "deuxieme refrain 2", 
		start : 155, 
		stop : 162, 
		onStart : function (event){
			couplet2_4B.show();
		}, 
		onStop : function (event){
			couplet2_4B.hide();
		},
		onStep : function (event){
			couplet2_4B.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});


	sequencer.registerSequence({
		name : "deuxieme refrain 3", 
		start : 163, 
		stop : 170, 
		onStart : function (event){
			refrain3.show();
		}, 
		onStop : function (event){
			refrain3.hide();
		},
		onStep : function (event){
			refrain3.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});


	sequencer.registerSequence({
		name : "deuxieme refrain 4", 
		start : 171, 
		stop : 178, 
		onStart : function (event){
			refrain4.show();
		}, 
		onStop : function (event){
			refrain4.hide();
		},
		onStep : function (event){
			refrain4.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "deuxieme run1", 
		start : 179, 
		stop : 186, 
		onStart : function (event){
			run1.show();
		}, 
		onStop : function (event){
			run1.hide();
		},
		onStep : function (event){
			run1.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});	
	sequencer.registerSequence({
		name : "deuxieme run3", 
		start : 187, 
		stop : 194, 
		onStart : function (event){
			run3.show();
		}, 
		onStop : function (event){
			run3.hide();
		},
		onStep : function (event){
			run3.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "deuxieme run2", 
		start : 195, 
		stop : 202, 
		onStart : function (event){
			run2.show();
		}, 
		onStop : function (event){
			run2.hide();
		},
		onStep : function (event){
			run2.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});	
	sequencer.registerSequence({
		name : "deuxieme run4", 
		start : 203, 
		stop : 210, 
		onStart : function (event){
			run4.show();
		}, 
		onStop : function (event){
			run4.hide();
		},
		onStep : function (event){
			run4.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "premier run5", 
		start : 211,  //moins 1 !
		stop : 218, 
		onStart : function (event){
			run5.show();
		}, 
		onStop : function (event){
			run5.hide();
		},
		onStep : function (event){
			run5.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});
	sequencer.registerSequence({
		name : "premier run6", 
		start : 219, 
		stop : 226, 
		onStart : function (event){
			run6.show();
		}, 
		onStop : function (event){
			run6.hide();
		},
		onStep : function (event){
			run6.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});
	sequencer.registerSequence({
		name : "preimer run7", 
		start : 227, 
		stop : 234, 
		onStart : function (event){
			run7.show();
		}, 
		onStop : function (event){
			run7.hide();
		},
		onStep : function (event){
			run7.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});
	sequencer.registerSequence({
		name : "premier run8", 
		start : 235, 
		stop : 242, 
		onStart : function (event){
			run8.show();
		}, 
		onStop : function (event){
			run8.hide();
		},
		onStep : function (event){
			run8.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	}); 


	sequencer.registerSequence({
		name : "couplet3_1", 
		start : 244, 
		stop : 259, 
		onStart : function (event){
			couplet3_1.show();
		}, 
		onStop : function (event){
			couplet3_1.hide();
		},
		onStep : function (event){
			couplet3_1.next();
		}, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "couplet3_2", 
		start : 260, 
		stop : 267, 
		onStart : function (event){
			couplet3_2.show();
		}, 
		onStop : function (event){
			couplet3_2.hide();
		},
		onStep : function (event){
			couplet3_2.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});	

	sequencer.registerSequence({
		name : "couplet3_3", 
		start : 268, 
		stop : 275, 
		onStart : function (event){
			couplet3_3.show();
		}, 
		onStop : function (event){
			couplet3_3.hide();
		},
		onStep : function (event){
			couplet3_3.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "couplet3_4", 
		start : 276, 
		stop : 291,  //283
		onStart : function (event){
			couplet3_4.show();
		}, 
		onStop : function (event){
			couplet3_4.hide();
		},
		onStep : function (event){
			couplet3_4.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});
	sequencer.registerSequence({
		name : "couplet3_5", 
		start : 292, 
		stop : 307, 
		onStart : function (event){
			couplet3_5.show();
		}, 
		onStop : function (event){
			couplet3_5.hide();
		},
		onStep : function (event){
			couplet3_5.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});


sequencer.registerSequence({
		name : "troisieme run1", 
		start : 309, 
		stop : 316, 
		onStart : function (event){
			run1.show();
		}, 
		onStop : function (event){
			run1.hide();
		},
		onStep : function (event){
			run1.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});	
	sequencer.registerSequence({
		name : "troisieme run2", 
		start : 317, 
		stop : 324, 
		onStart : function (event){
			run1.show();
		}, 
		onStop : function (event){
			run1.hide();
		},
		onStep : function (event){
			run1.next(true);
		}, 
		measure : 1, 
		steps : [1]
	});	



	sequencer.registerSequence({
		name : "troisieme refrain 1", 
		start : 325, 
		stop : 332, 
		onStart : function (event){
			refrain1.show();
		}, 
		onStop : function (event){
			refrain1.hide();
		},
		onStep : function (event){
			refrain1.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "troisieme refrain 2", 
		start : 333, 
		stop : 340, 
		onStart : function (event){
			outro.show();
		}, 
		onStop : function (event){
			outro.hide();
		},
		onStep : function (event){
			outro.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "troisieme refrain 3", 
		start : 341, 
		stop : 348, 
		onStart : function (event){
			//flipX = -1;
			refrain3.show();
		}, 
		onStop : function (event){
			//flipX = 1;
			refrain3.hide();
		},
		onStep : function (event){
			refrain3.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "troisieme refrain 4", 
		start : 349, 
		stop : 356, 
		onStart : function (event){
			outro.pointer = 0;
			outro.show();
		}, 
		onStop : function (event){
			outro.hide();
		},
		onStep : function (event){
			outro.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "run9", 
		start : 357, 
		stop : 364, 
		onStart : function (event){
			run9.show();
		}, 
		onStop : function (event){
			run9.hide();
		},
		onStep : function (event){
			run9.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "run10", 
		start : 365, 
		stop : 372, 
		onStart : function (event){
			run10.show();
		}, 
		onStop : function (event){
			run10.hide();
		},
		onStep : function (event){
			run10.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});



	sequencer.registerSequence({
		name : "quatrieme refrain 1", 
		start : 373, 
		stop : 380, 
		onStart : function (event){
			refrain1.show();
		}, 
		onStop : function (event){
			refrain1.hide();
		},
		onStep : function (event){
			refrain1.next(true);
		}, 
		measure : 1, 
		steps : [1+23/24]
	});


	sequencer.registerSequence({
		name : "run11", 
		start : 381, 
		stop : 388, 
		onStart : function (event){
			run11.show();
		}, 
		onStop : function (event){
			run11.hide();
		},
		onStep : function (event){
			run11.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "run12", 
		start : 389, 
		stop : 396, 
		onStart : function (event){
			run12.show();
		}, 
		onStop : function (event){
			run12.hide();
		},
		onStep : function (event){
			run12.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

	sequencer.registerSequence({
		name : "fin", 
		start : 397, 
		stop : 408, 
		onStart : function (event){
			fin.show();
		}, 
		onStop : function (event){
			fin.hide();
		},
		onStep : function (event){
			fin.next();
		}, 
		measure : 1, 
		steps : [1+23/24]
	});

}

function draw(){
	sequencer.update();

	if(background.visible){
		background.display();
	}

	if(refrain1.visible){
		refrain1.display();
	}

	if(refrain2.visible){
		refrain2.display();
	}

	if(refrain3.visible){
		refrain3.display();
	}

	if(refrain4.visible){
		refrain4.display();
	}

	if(run1.visible){
		run1.display();
	}

	if(run2.visible){
		run2.display();
	}

	if(run3.visible){
		run3.display();
	}

	if(run4.visible){
		run4.display();
	}

	if(intro.visible){
		intro.display();
	}

	if(couplet_1.visible){
		couplet_1.display();
	}

	if(couplet_2.visible){
		couplet_2.display();
	}

	if(couplet_3.visible){
		couplet_3.display();
	}

	if(couplet_4.visible){
		couplet_4.display();
	}

	if(couplet2_1.visible){
		couplet2_1.display();
	}

	if(couplet2_2.visible){
		couplet2_2.display();
	}

	if(couplet2_3.visible){
		couplet2_3.display();
	}

	if(couplet2_4.visible){
		couplet2_4.display();
	}

	if(couplet2_4B.visible){
		couplet2_4B.display();
	}

	if(couplet3_1.visible){
		couplet3_1.display();
	}

	if(couplet3_2.visible){
		couplet3_2.display();
	}

	if(couplet3_3.visible){
		couplet3_3.display();
	}

	if(couplet3_4.visible){
		couplet3_4.display();
	}

	if(couplet3_5.visible){
		couplet3_5.display();
	}

	if(run5.visible){
		run5.display();
	}

	if(run6.visible){
		run6.display();
	}

	if(run7.visible){
		run7.display();
	}

	if(run8.visible){
		run8.display();
	}

	if(run9.visible){
		run9.display();
	}

	if(run10.visible){
		run10.display();
	}

	if(run11.visible){
		run11.display();
	}

	if(run12.visible){
		run12.display();
	}

	if(outro.visible){
		outro.display();
	}

	if(fin.visible){
		fin.display();
	}


}