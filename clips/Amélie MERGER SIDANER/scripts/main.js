/*----------------------------------------*\
  25_26_AN1_clipWeb - main.js
  @author Amélie MERGER SIDANER
  @Date:   2026-04-03 
  @Last Modified time: 2026-04-03 
\*----------------------------------------*/
let BPM = 115;
let audioPath = "./assets/audio/Niwel-Memories.mp3";
let sequencer;

let ouverture;
let apparition;
let marche;
let approche;
let admiration;
let lent_vide;
let vide;
let relever;
let marche2;
let approche2;
let admiration2;
let courir;
let yeux;
let courir2;
let calin;
let ensemble;
let rentrons;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM,false);

	ouverture= new Animator(1,77,"./assets/images/Ouverture/_imgNum_.jpg");
	apparition= new Animator(1,2,"./assets/images/Apparition/_imgNum_.jpg");
	marche= new Animator(1,31,"./assets/images/Refrain/_imgNum_.jpg");
	approche= new Animator(1,14,"./assets/images/Approche/_imgNum_.jpg");
	admiration= new Animator(1,2,"./assets/images/Admiration/_imgNum_.jpg");
	lent_vide= new Animator(1,20,"./assets/images/Vide/_imgNum_.jpg");
	vide= new Animator(1,20,"./assets/images/Vide/_imgNum_.jpg");
	relever=new Animator(1,19,"./assets/images/Relever/_imgNum_.jpg");
	marche2= new Animator(1,31,"./assets/images/Refrain/_imgNum_.jpg");
	visage= new Animator(1,37,"./assets/images/Visage/_imgNum_.jpg");
	courir= new Animator(1,20,"./assets/images/Courir/_imgNum_.jpg");
	yeux= new Animator(1,36,"./assets/images/Yeux/_imgNum_.jpg");
	courir2= new Animator(1,20,"./assets/images/Courir/_imgNum_.jpg");
	calin= new Animator(1,13,"./assets/images/Calin/_imgNum_.jpg");
	ensemble= new Animator(1,1,"./assets/images/Ensemble/_imgNum_.jpg");
	rentrons= new Animator(1,30,"./assets/images/Rentrons/_imgNum_.jpg");

	ouverture.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Ouverture", 
		start : 1, 
		stop : 34, 
		onStart : function (event){
			ouverture.show();
		}, 
		onStop : function (event){
			ouverture.hide();
		},
		onStep : function (event){
			ouverture.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/4.5,1+2/4.5,1+3/4]
		
	});

apparition.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "L'apparition de la femme", 
		start : 35, 
		stop : 65, 
		onStart : function (event){
			apparition.show();
		}, 
		onStop : function (event){
			apparition.hide();
		},
		onStep : function (event){
			apparition.next(true);
		}, 
		measure : 1, 
			
	});

	marche.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Refrain :marche", 
		start : 66, 
		stop : 93, 
		onStart : function (event){
			marche.show();
		}, 
		onStop : function (event){
			marche.hide();
		},
		onStep : function (event){
			marche.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/3, 1+2/3]
	});


	approche.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Refrain:s'approche", 
		start : 94, 
		stop : 105, 
		onStart : function (event){
			approche.show();
		}, 
		onStop : function (event){
			approche.hide();
		},
		onStep : function (event){
			approche.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/5,1+2/5,1+3/5,4/5]
	});

	admiration.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Refrain:admiration", 
		start : 106, 
		stop : 127, 
		onStart : function (event){
			admiration.show();
		}, 
		onStop : function (event){
			admiration.hide();
		},
		onStep : function (event){
			admiration.next(true);
		}, 
		measure : 1, 
	
	});

	lent_vide.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Musique:lent_vide", 
		start : 128, 
		stop : 145, 
		onStart : function (event){
			lent_vide.show();
		}, 
		onStop : function (event){
			lent_vide.hide();
		},
		onStep : function (event){
			lent_vide.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/5,1+2/5,1+3/5,1+4/5]
	});

	vide.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Musique: vide", 
		start : 146, 
		stop : 191, 
		onStart : function (event){
			vide.show();
		}, 
		onStop : function (event){
			vide.hide();
		},
		onStep : function (event){
			vide.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/3, 1+2/3]
	});

	relever.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "fin musique:relever", 
		start : 192, 
		stop : 209, 
		onStart : function (event){
			relever.show();
		}, 
		onStop : function (event){
			relever.hide();
		},
		onStep : function (event){
			relever.next(true);
		}, 
		measure : 1, 
		

	});

	marche2.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Refrain:marche2", 
		start : 210, 
		stop : 238, 
		onStart : function (event){
			marche2.show();
		}, 
		onStop : function (event){
			marche2.hide();
		},
		onStep : function (event){
			marche2.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/3, 1+2/3]
	});

	visage.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Refrain:Visage", 
		start : 239, 
		stop : 274, 
		onStart : function (event){
			visage.show();
		}, 
		onStop : function (event){
			visage.hide();
		},
		onStep : function (event){
			visage.next(true);
		}, 
		measure : 1, 
		
	});

	

	courir.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Fin:courir", 
		start : 275, 
		stop : 303, 
		onStart : function (event){
			courir.show();
		}, 
		onStop : function (event){
			courir.hide();
		},
		onStep : function (event){
			courir.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/4, 1+2/4,1+3/4]
	
	});

	yeux.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Musique:yeux", 
		start : 304, 
		stop : 335, 
		onStart : function (event){
			yeux.show();
		}, 
		onStop : function (event){
			yeux.hide();
		},
		onStep : function (event){
			yeux.next(true);
		}, 
		measure : 1, 
		
	});

	courir2.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Fin:courir2", 
		start : 336, 
		stop : 364, 
		onStart : function (event){
			courir2.show();
		}, 
		onStop : function (event){
			courir2.hide();
		},
		onStep : function (event){
			courir2.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/4, 1+2/4,1+3/4]
	
	});

	calin.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Fin:calin", 
		start : 365, 
		stop : 367, 
		onStart : function (event){
			calin.show();
		}, 
		onStop : function (event){
			calin.hide();
		},
		onStep : function (event){
			calin.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/4, 1+2/4,1+3/4]
	
	});
	ensemble.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Fin:ensemble", 
		start : 368, 
		stop : 370, 
		onStart : function (event){
			ensemble.show();
		}, 
		onStop : function (event){
			ensemble.hide();
		},
		onStep : function (event){
			ensemble.next(true);
		}, 
		measure : 1, 
	
	
	});

	rentrons.setSize(windowWidth, windowHeight);
	sequencer.registerSequence({
		name : "Rentrons", 
		start : 371, 
		stop : 399, 
		onStart : function (event){
			rentrons.show();
		}, 
		onStop : function (event){
			rentrons.hide();
		},
		onStep : function (event){
			rentrons.next(true);
		}, 
		measure : 1, 
		steps : [1,1+1/3, 1+2/3]
	});


	
}

function draw(){
	sequencer.update();

	background(0);

	if(ouverture.visible){
		ouverture.display();
	}

	if(apparition.visible){
		apparition.display();
	}

	if(marche.visible){
		marche.display();
	}

	if(approche.visible){
		approche.display();
	}

	if(admiration.visible){
		admiration.display();
	}

	if(vide.visible){
		vide.display();
	}

	if(lent_vide.visible){
		lent_vide.display();
	}

	if(relever.visible){
		relever.display();
	}

	if(marche2.visible){
		marche2.display();
	}
		if(visage.visible){
		visage.display();
	}

	if(courir.visible){
		courir.display();
	}

	if(yeux.visible){
		yeux.display();
	}

	if(courir2.visible){
		courir2.display();
	}

	if(calin.visible){
		calin.display();
	}

	if(ensemble.visible){
		ensemble.display();
	}

	if(rentrons.visible){
		rentrons.display();
	}

}
