/*------------------------------------*\
25_26_AN1_clipWeb - main.js
@author Sheryne Aouizagh
@Date:   2026-04-03
/*------------------------------------*/


let BPM = 97;
let audioPath = "assets/audio/sad.mp3";
let sequencer;


let intro;
let arbremag;
let envole;
let vole;
let assis;
let goutte;
let bleu;
let cocon;
let tourbillon;
let chute;
let enfermer;
let ange;
let depart;
let fin;
let FX = 0;
let bg = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	intro = new Animator(1,4,"./assets/images/intro/_imgNum_.jpg");
	arbremag = new Animator(1,20,"./assets/images/arbremag/_imgNum_.jpg");
	envole = new Animator(1,13,"./assets/images/envole/_imgNum_.jpg");
	vole = new Animator(1,10,"./assets/images/vole/_imgNum_.jpg");
	assis = new Animator(1,2,"./assets/images/assis/_imgNum_.jpg");
	goutte = new Animator(1,9,"./assets/images/goutte/_imgNum_.jpg");
  bleu = new Animator(1,25,"./assets/images/bleu/_imgNum_.jpg");
  cocon = new Animator(1,6,"./assets/images/cocon/_imgNum_.jpg");
  tourbillon = new Animator(1,10,"./assets/images/tourbillon/_imgNum_.jpg");
  chute = new Animator(1,15,"./assets/images/chute/_imgNum_.jpg");
  prison = new Animator(1,4,"./assets/images/prison/_imgNum_.jpg");
  enfermer = new Animator(1,4,"./assets/images/enfermer/_imgNum_.jpg");
  ange = new Animator(1,25,"./assets/images/ange/_imgNum_.jpg");
  depart = new Animator(1,43,"./assets/images/depart/_imgNum_.jpg");
  fin = new Animator(1,30,"./assets/images/fin/_imgNum_.jpg");
 



  intro.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "intro",
		start : 1,
		stop : 17,
		onStart : function (event){
			intro.show();
		},
		onStop : function (event){
			intro.hide();
		},
		onStep : function (event){
			intro.next(true);
		},
		
		measure: 1,
		steps: [1]
	});

	arbremag.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "arbremag",
		start : 18,
		stop : 33,
		onStart : function (event){
			arbremag.show();
		},
		onStop : function (event){
			arbremag.hide();
		},
		onStep : function (event){
			arbremag.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});

	envole.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "envole",
		start : 34,
		stop : 40,
		onStart : function (event){
			envole.show();
		},
		onStop : function (event){
			envole.hide();
		},
		onStep : function (event){
			envole.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});

	vole.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "vole",
		start : 41,
		stop : 49,
		onStart : function (event){
			vole.show();
		},
		onStop : function (event){
			vole.hide();
		},
		onStep : function (event){
			vole.next(true);
		},

		measure: 1,
		steps: [1, 1+1/2]
	});

	 assis.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "assis",
		start : 50,
		stop : 55,
		onStart : function (event){
			assis.show();
		},
		onStop : function (event){
			assis.hide();
		},
		onStep : function (event){
			assis.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2, 1+2/2]
	});

  goutte.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "goutte",
		start : 56,
		stop : 63,
		onStart : function (event){
			goutte.show();
		},
		onStop : function (event){
			goutte.hide();
		},
		onStep : function (event){
			goutte.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});


  bleu.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "bleu",
		start : 98,
		stop : 113,
		onStart : function (event){
			bleu.show();
		},
		onStop : function (event){
			bleu.hide();
		},
		onStep : function (event){
			bleu.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/3, 1+2/3]
	});
  


  cocon.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "cocon",
		start : 114,
		stop : 118,
		onStart : function (event){
			cocon.show();
		},
		onStop : function (event){
			cocon.hide();
		},
		onStep : function (event){
			cocon.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/3, 1+2/3]
	});


	tourbillon.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "tourbillon",
		start : 64,
		stop : 69,
		onStart : function (event){
			tourbillon.show();
		},
		onStop : function (event){
			tourbillon.hide();
		},
		onStep : function (event){
			tourbillon.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/3, 1+2/3]
	});

	chute.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "chute",
		start : 70,
		stop : 83,
		onStart : function (event){
			chute.show();
		},
		onStop : function (event){
			chute.hide();
		},
		onStep : function (event){
			chute.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/3, 1+2/3]
	});

	prison.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "prison",
		start : 84,
		stop : 97,
		onStart : function (event){
			prison.show();
		},
		onStop : function (event){
			prison.hide();
		},
		onStep : function (event){
			prison.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});

	enfermer.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "enfermer",
		start : 119,
		stop : 122,
		onStart : function (event){
			enfermer.show();
		},
		onStop : function (event){
			enfermer.hide();
		},
		onStep : function (event){
			enfermer.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});



	ange.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "ange",
		start : 123,
		stop : 146,
		onStart : function (event){
			ange.show();
		},
		onStop : function (event){
			ange.hide();
		},
		onStep : function (event){
			ange.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});

	depart.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "depart",
		start : 147,
		stop : 188,
		onStart : function (event){
			depart.show();
		},
		onStop : function (event){
			depart.hide();
		},
		onStep : function (event){
			depart.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});

	fin.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "fin",
		start : 189,
		stop : 218,
		onStart : function (event){
			fin.show();
		},
		onStop : function (event){
			fin.hide();
		},
		onStep : function (event){
			fin.next(true);
		},
		
		measure: 1,
		steps: [1, 1+1/2]
	});


}



  function draw(){
	sequencer.update();
	background(0);

	if(intro.visible){
	   intro.display();
	}

    if(arbremag.visible){
	   arbremag.display();
	}

	if(envole.visible){
	   envole.display();
	}

	if(vole.visible){
	   vole.display();
	}

	if(assis.visible){
	   assis.display();
	}
	
	if(goutte.visible){
	   goutte.display();
	}


	if(bleu.visible){
	   bleu.display();
	}

	if(cocon.visible){
	   cocon.display();
	}

	if(tourbillon.visible){
	   tourbillon.display();
	}

		if(chute.visible){
	   chute.display();
	}

	if(prison.visible){
	   prison.display();
	}

	if(enfermer.visible){
	   enfermer.display();
	}

	if(ange.visible){
	   ange.display();
	}

	if(depart.visible){
	   depart.display();
	}

	if(fin.visible){
	   fin.display();
	}


  }