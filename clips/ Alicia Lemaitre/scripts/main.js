/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 67;
let audioPath = "assets/audio/Lonely.mp3";
let sequencer;
let TSVide; 
let TS;
let BS;
let BSDessin;
let TT;
let TTVide;
let PTD;
let PBCote;
let PBC;
let PBCsombre;
let PP;
let PTVide;
let PTK;
let PTKVide;
let PMVide;
let PM;
let PBFace;
let PT;
let PTfull;
let BLVide;
let BL;
let BLvague;
let B;
let PBFaceOh;
let Feel; 
let Live;
let Fin;


function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM);

	TSVide=new Animator(1,12, "./assets/images/TSVide/TS-_imgNum_.jpg")
	TSVide.setSize(width, height);
	TSVide.setPosition(0,0);

	TS=new Animator(1,12, "./assets/images/TS/TS-_imgNum_.jpg")
	TS.setSize(width, height);
	TS.setPosition(0,0);

	BS=new Animator(1,16, "./assets/images/BS/BS-_imgNum_.jpg")
	BS.setSize(width, height);
	BS.setPosition(0,0);

	BSDessin=new Animator(1,16, "./assets/images/BSDessin/BS-_imgNum_.jpg")
	BSDessin.setSize(width, height);
	BSDessin.setPosition(0,0);

	TTVide=new Animator(1,6, "./assets/images/TTVide/TT-_imgNum_.jpg")
	TTVide.setSize(width, height);
	TTVide.setPosition(0,0);

	TT=new Animator(1,6, "./assets/images/TT/TT-_imgNum_.jpg")
	TT.setSize(width, height);
	TT.setPosition(0,0);

	PTD=new Animator(1,4, "./assets/images/PTD/PTD-_imgNum_.jpg")
	PTD.setSize(width, height);
	PTD.setPosition(0,0);

	PBCote=new Animator(1,12, "./assets/images/PBCote/PBCote-_imgNum_.jpg")
	PBCote.setSize(width, height);
	PBCote.setPosition(0,0);

	PBC=new Animator(1,12, "./assets/images/PBC/PBCote-_imgNum_.jpg")
	PBC.setSize(width, height);
	PBC.setPosition(0,0);

	PBCsombre=new Animator(1,13, "./assets/images/PBCsombre/PBCote-_imgNum_.jpg")
	PBCsombre.setSize(width, height);
	PBCsombre.setPosition(0,0);
	
	PP=new Animator(1,14, "./assets/images/PP/PP-_imgNum_.jpg")
	PP.setSize(width, height);
	PP.setPosition(0,0);

	PTVide=new Animator(2,4, "./assets/images/PTVide/PTK-_imgNum_.jpg")
	PTVide.setSize(width, height);
	PTVide.setPosition(0,0);

	PTKVide=new Animator(2,4, "./assets/images/PTKVide/_PTK-_imgNum_.jpg")
	PTKVide.setSize(width, height);
	PTKVide.setPosition(0,0);

	PTK=new Animator(2,4, "./assets/images/PTK/PTK-_imgNum_.jpg")
	PTK.setSize(width, height);
	PTK.setPosition(0,0);

	BLVide=new Animator(1,8, "./assets/images/BLVide/BL-_imgNum_.jpg")
	BLVide.setSize(width, height);
	BLVide.setPosition(0,0);

	PTfull=new Animator(2,4, "./assets/images/PTfull/PTK-_imgNum_.jpg")
	PTfull.setSize(width, height);
	PTfull.setPosition(0,0);

	BL=new Animator(1,8, "./assets/images/BL/BL-_imgNum_.jpg")
	BL.setSize(width, height);
	BL.setPosition(0,0);

	BLvague=new Animator(1,8, "./assets/images/BLvague/BL-_imgNum_.jpg")
	BLvague.setSize(width, height);
	BLvague.setPosition(0,0);

	PMVide=new Animator(1,15, "./assets/images/PMVide/PM-_imgNum_.jpg")
	PMVide.setSize(width, height);
	PMVide.setPosition(0,0);

	PM=new Animator(1,15, "./assets/images/PM/PM-_imgNum_.jpg")
	PM.setSize(width, height);
	PM.setPosition(0,0);

	PBFace=new Animator(1,12, "./assets/images/PBFace/PBFace-_imgNum_.jpg")
	PBFace.setSize(width, height);
	PBFace.setPosition(0,0);

	PT=new Animator(1,4, "./assets/images/PT/PT-_imgNum_.jpg")
	PT.setSize(width, height);
	PT.setPosition(0,0);

	BVide=new Animator(1,12, "./assets/images/BVide/B-_imgNum_.jpg")
	BVide.setSize(width, height);

	B=new Animator(1,12, "./assets/images/B/B-_imgNum_.jpg")
	B.setSize(width, height);
	B.setPosition(0,0);

	PBFaceOh=new Animator(1,12, "./assets/images/PBFaceOh/PBFaceOh-_imgNum_.jpg")
	PBFaceOh.setSize(width, height);
	PBFaceOh.setPosition(0,0);

	Feel=new Animator(1,12, "./assets/images/Feel/PBFaceOh-_imgNum_.jpg")
	Feel.setSize(width, height);
	Feel.setPosition(0,0);

	Live=new Animator(1,12, "./assets/images/Live/PBFaceOh-_imgNum_.jpg")
	Live.setSize(width, height);
	Live.setPosition(0,0);

	Fin=new Animator(1,13, "./assets/images/Fin/PTK-_imgNum_.jpg")
	Fin.setSize(width, height);
	Fin.setPosition(0,0);





	
	sequencer.registerSequence({
		name : "TSVide", 
		start :3, 
		stop : 9, 
		onStart : function (event){
			TSVide.show();
		}, 
		onStop : function (event){
			TSVide.hide();
		},
		onStep : function (event){
			TSVide.next();
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "BS", 
		start :8, 
		stop : 14, 
		onStart : function (event){
			BS.show();
		}, 
		onStop : function (event){
			BS.hide();
		},
		onStep : function (event){
			BS.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "TTVide", 
		start :15, 
		stop : 18, 
		onStart : function (event){
			TTVide.show();
		}, 
		onStop : function (event){
			TTVide.hide();
		},
		onStep : function (event){
			TTVide.next();
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PTVide", 
		start :19, 
		stop : 21, 
		onStart : function (event){
			PTVide.show();
		}, 
		onStop : function (event){
			PTVide.hide();
		},
		onStep : function (event){
			PTVide.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PBCote", 
		start :22, 
		stop : 29, 
		onStart : function (event){
			PBCote.show();
		}, 
		onStop : function (event){
			PBCote.hide();
		},
		onStep : function (event){
			PBCote.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	
	sequencer.registerSequence({
		name : "PP", 
		start :30, 
		stop : 34, 
		onStart : function (event){
			PP.show();
		}, 
		onStop : function (event){
			PP.hide();
		},
		onStep : function (event){
			PP.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PTKVide", 
		start :35, 
		stop : 43, 
		onStart : function (event){
			PTKVide.show();
		}, 
		onStop : function (event){
			PTKVide.hide();
		},
		onStep : function (event){
			PTKVide.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	sequencer.registerSequence({
		name : "BLVide", 
		start :44, 
		stop : 50, 
		onStart : function (event){
			BLVide.show();
		}, 
		onStop : function (event){
			BLVide.hide();
		},
		onStep : function (event){
			BLVide.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	sequencer.registerSequence({
		name : "PMVide", 
		start : 51, 
		stop : 58, 
		onStart : function (event){
			PMVide.show();
		}, 
		onStop : function (event){
			PMVide.hide();
		},
		onStep : function (event){
			PMVide.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PBFace", 
		start : 59, 
		stop : 66, 
		onStart : function (event){
			PBFace.show();
		}, 
		onStop : function (event){
			PBFace.hide();
		},
		onStep : function (event){
			PBFace.next();
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PMVide1", 
		start : 67, 
		stop : 74, 
		onStart : function (event){
			PMVide.show();
		}, 
		onStop : function (event){
			PMVide.hide();
		},
		onStep : function (event){
			PMVide.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PT", 
		start : 75, 
		stop : 85, 
		onStart : function (event){
			PT.show();
		}, 
		onStop : function (event){
			PT.hide();
		},
		onStep : function (event){
			PT.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "BL1", 
		start : 87, 
		stop : 98, 
		onStart : function (event){
			BL.show();
		}, 
		onStop : function (event){
			BL.hide();
		},
		onStep : function (event){
			BL.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PTD1", 
		start : 99, 
		stop : 102, 
		onStart : function (event){
			PTD.show();
		}, 
		onStop : function (event){
			PTD.hide();
		},
		onStep : function (event){
			PTD.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "BVide", 
		start : 103, 
		stop : 117, 
		onStart : function (event){
			BVide.show();
		}, 
		onStop : function (event){
			BVide.hide();
		},
		onStep : function (event){
			BVide.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PM2", 
		start : 118, 
		stop : 125, 
		onStart : function (event){
			PM.show();
		}, 
		onStop : function (event){
			PM.hide();
		},
		onStep : function (event){
			PM.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "Feel", 
		start : 126, 
		stop : 130, 
		onStart : function (event){
			Feel.show();
		}, 
		onStop : function (event){
			Feel.hide();
		},
		onStep : function (event){
			Feel.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "Live", 
		start : 131, 
		stop : 135, 
		onStart : function (event){
			Live.show();
		}, 
		onStop : function (event){
			Live.hide();
		},
		onStep : function (event){
			Live.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PM3", 
		start : 136, 
		stop : 142, 
		onStart : function (event){
			PM.show();
		}, 
		onStop : function (event){
			PM.hide();
		},
		onStep : function (event){
			PM.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PTfull", 
		start : 143, 
		stop : 151, 
		onStart : function (event){
			PTfull.show();
		}, 
		onStop : function (event){
			PTfull.hide();
		},
		onStep : function (event){
			PTfull.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "TS1", 
		start :152, 
		stop : 156, 
		onStart : function (event){
			TS.show();
		}, 
		onStop : function (event){
			TS.hide();
		},
		onStep : function (event){
			TS.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "BSDessin", 
		start :157, 
		stop : 172, 
		onStart : function (event){
			BSDessin.show();
		}, 
		onStop : function (event){
			BSDessin.hide();
		},
		onStep : function (event){
			BSDessin.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "TT1", 
		start :173, 
		stop : 185, 
		onStart : function (event){
			TT.show();
		}, 
		onStop : function (event){
			TT.hide();
		},
		onStep : function (event){
			TT.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PBC", 
		start :161, 
		stop : 167, 
		onStart : function (event){
			PBC.show();
		}, 
		onStop : function (event){
			PBC.hide();
		},
		onStep : function (event){
			PBC.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PBCsombre", 
		start :168, 
		stop : 173, 
		onStart : function (event){
			PBCsombre.show();
		}, 
		onStop : function (event){
			PBCsombre.hide();
		},
		onStep : function (event){
			PBCsombre.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PTK1", 
		start :174, 
		stop : 177, 
		onStart : function (event){
			PTK.show();
		}, 
		onStop : function (event){
			PTK.hide();
		},
		onStep : function (event){
			PTK.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	sequencer.registerSequence({
		name : "PBFaceOh", 
		start :178, 
		stop : 192, 
		onStart : function (event){
			PBFaceOh.show();
		}, 
		onStop : function (event){
			PBFaceOh.hide();
		},
		onStep : function (event){
			PBFaceOh.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PM4", 
		start :193, 
		stop : 200, 
		onStart : function (event){
			PM.show();
		}, 
		onStop : function (event){
			PM.hide();
		},
		onStep : function (event){
			PM.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "B1", 
		start :201, 
		stop : 208, 
		onStart : function (event){
			B.show();
		}, 
		onStop : function (event){
			B.hide();
		},
		onStep : function (event){
			B.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "BLvague", 
		start :209, 
		stop : 216, 
		onStart : function (event){
			BLvague.show();
		}, 
		onStop : function (event){
			BLvague.hide();
		},
		onStep : function (event){
			BLvague.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "PT2", 
		start : 217, 
		stop : 225, 
		onStart : function (event){
			PT.show();
		}, 
		onStop : function (event){
			PT.hide();
		},
		onStep : function (event){
			PT.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});

	sequencer.registerSequence({
		name : "Fin", 
		start : 226, 
		stop : 231, 
		onStart : function (event){
			Fin.show();
		}, 
		onStop : function (event){
			Fin.hide();
		},
		onStep : function (event){
			Fin.next(true);
		}, 
		measure : 1, 
		steps : [1, 1+1/2]
	});


	

	
}


function draw(){

	sequencer.update();
	background(0);

	if(TSVide.visible){
		TSVide.display();
	}

	if(TS.visible){
		TS.display();
	}

	if(BS.visible){
		BS.display();
	}

	if(BSDessin.visible){
		BSDessin.display();
	}

	if(TT.visible){
		TT.display();
	}

	if(TTVide.visible){
		TTVide.display();
	}

	if(PTD.visible){
		PTD.display();
	}

	if(PBCote.visible){
		PBCote.display();
	}

	if(PBC.visible){
		PBC.display();
	}

	if(PBCsombre.visible){
		PBCsombre.display();
	}

	if(PP.visible){
		PP.display();
	}

	if(PTVide.visible){
		PTVide.display();
	}


	if(PTKVide.visible){
		PTKVide.display();
	}

	if(PTK.visible){
		PTK.display();
	}

	if(BLVide.visible){
		BLVide.display();
	}

	if(BL.visible){
		BL.display();
	}

	if(BLvague.visible){
		BLvague.display();
	}

	if(PMVide.visible){
		PMVide.display();
	}
	
	if(PM.visible){
		PM.display();
	}

	if(PBFace.visible){
		PBFace.display();
	}

	if(PT.visible){
		PT.display();
	}

	if(PTfull.visible){
		PTfull.display();
	}

	if(BVide.visible){
		BVide.display();
	}

	if(B.visible){
		B.display();
	}

	if(PBFaceOh.visible){
		PBFaceOh.display();
	}

	if(Feel.visible){
		Feel.display();
	}

	if(Live.visible){
		Live.display();
	}

	if(Fin.visible){
		Fin.display();
	}



	
	
}