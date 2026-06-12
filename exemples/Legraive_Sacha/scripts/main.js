/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 80;
let audioPath = "assets/audio/End of Chaos.mp3";
let sequencer;

let sunset;
let clothes;
let fire;
let train;
let trainSeqCursor = 0;
let trainSeq = [4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4, 5, 6, 7];
let train2;
let train2SeqCursor = 0;
let train2Seq = [1,1,2,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4, 5, 6, 7];
let bn;
let bnSeqCursor = 0;
let bnSeq = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,4,2,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,4,2,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,4,2,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
let walk;
let walkSeqCursor = 0;
let walkSeq = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
let day;
let daySeqCursor = 0;
let daySeq = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
let drap;
let drapSeqCursor = 0;
let drapSeq = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
let ginger;
let gingerSeqCursor = 0;
let gingerSeq = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
let train3;
let train3SeqCursor = 0;
let train3Seq = [1,1,2,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4, 5, 6, 7];
let mongolfiere;
let cat;
let catSeqCursor = 0;
let catSeq = [1,2,3,4,5,5,6,6,6,7,8,9,10,10,10,10]

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);

	sunset = new Animator( 0,1, "./assets/images/background/sunset.png");
  sunset.show()
	sunset.setSize(windowWidth, windowHeight)

	clothes = new Animator( 1,6, "./assets/images/clothes/Clothes _imgNum_.png");
	clothes.show()
	clothes.setSize(windowWidth, windowHeight)

  fire = new Animator( 1,6, "./assets/images/fire/Fire _imgNum_.png");
  fire.show()
  fire.setPosition(820,270) 
  fire.setSize(170,120)

  train = new Animator( 1,7, "./assets/images/train/Train_imgNum_.png");
  train.show()
  train.setSize(windowWidth, windowHeight)

  train2 = new Animator( 1,7, "./assets/images/train2/Train2 _imgNum_.png");
  train2.setSize(windowWidth, windowHeight)

  bn = new Animator(1,5, "./assets/images/bn/Night_imgNum_.png");
  bn.setSize(windowWidth, windowHeight)

  walk = new Animator(1,9, "./assets/images/walk/Walk_imgNum_.png");
  walk.setSize(windowWidth, windowHeight)

  day = new Animator(0,1, "./assets/images/day/Day.png")
  day.setSize(windowWidth, windowHeight)

  drap = new Animator(1,4,"./assets/images/drap/Drap_imgNum_.png");
  drap.setSize(windowWidth, windowHeight)

  ginger = new Animator(1,4,"./assets/images/ginger/Ginger_imgNum_.png");
  ginger.setSize(windowWidth, windowHeight)

  train3 = new Animator( 1,7,"./assets/images/train3/Train3 _imgNum_.png");
  train3.setSize(windowWidth, windowHeight)

  mongolfiere = new Animator(1,1,"./assets/images/mongolfiere/Mongolfiere.png");
  mongolfiere.setSize(windowWidth, windowHeight)

  cat = new Animator( 1,10,"./assets/images/cat/Cat_imgNum_.png");
  cat.setSize(windowWidth, windowHeight)

	sequencer.registerSequence({
		name : "static", 
		start : 1, 
		stop : 37, 
		onStart : function (event){
			sunset.show()
		}, 
		onStop : function (event){
			sunset.hide()
		},
		onStep : function (event){
			sunset.setPointer(1 - event.amount);
		}, 
		measure : 1, 
		steps : [1]
	});



	sequencer.registerSequence({
		name : "moveClothes", 
		start : 4, 
		stop : 37, 
		onStart : function (event){
		
		}, 
		onStop : function (event){
		 clothes.hide()
		},
		onStep : function (event){
			clothes.next(true)
		}, 
		measure : 1, 
		steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12]
	});

  
  sequencer.registerSequence({
  	name : "animFire",
  	start : 4,
  	stop : 37,
  	onStart : function (event){

  	},
  	onStop : function (event){
    fire.hide()
  	},
  	onStep : function (event){
  		fire.next(true)
  	},
  	measure : 1,
  	steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12, 1+12/12, 1+13/12]
  });

  
  sequencer.registerSequence({
  	name : "tchooTrain",
  	start : 1,
  	stop : 15,
  	onStart : function (event){

  	},
  	onStop : function (event){
     train.hide ()
  	},
  	onStep : function (event){
  		console.log(train.pointer)
  		if(trainSeqCursor >= trainSeq.length){
  			train.hide()
  		}else{
	  		train.pointer = trainSeq[trainSeqCursor] -1;
	  		trainSeqCursor ++;
	  	}
  	},
  	measure : 1,
  	steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12]
  });


  sequencer.registerSequence({
  	name : "otherTrain",
  	start : 67,
  	stop : 102,
  	onStart : function (event){
  		train2.show()
  	},
  	onStop : function (event){
     train2.hide ()
  	},
  	onStep : function (event){
  		console.log(train2.pointer)
  		if(train2SeqCursor >= train2Seq.length){
  			train2.hide()
  		}else{
	  		train2.pointer = train2Seq[train2SeqCursor] -1;
	  		train2SeqCursor ++;
	  	}
  	},
  	measure : 1,
  	steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12]
  });

   sequencer.registerSequence({
		name : "nightyNight", 
		start : 100, 
		stop : 133, 
		onStart : function (event){
			bn.show()
		}, 
		onStop : function (event){
			bn.hide()
		},
		onStep : function (event){
	  	console.log(bn.pointer)
  		if(bnSeqCursor >= bnSeq.length){
  			bn.hide()
  		}else{
	  		bn.pointer = bnSeq[bnSeqCursor] -1;
	  		bnSeqCursor ++;
	  	}
	  }, 
		measure : 1, 
		steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12]
	});

  sequencer.registerSequence({
		name : "shortWalk", 
		start : 134, 
		stop : 160, 
		onStart : function (event){
			walk.show()
		}, 
		onStop : function (event){
			walk.hide()
		},
		onStep : function (event){
	  	console.log(walk.pointer)
  		if(walkSeqCursor >= walkSeq.length){
  			walk.hide()
  		}else{
	  		walk.pointer = walkSeq[walkSeqCursor] -1;
	  		walkSeqCursor ++;
	  	}
	  }, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
		name : "brightDay", 
		start : 37, 
		stop : 69, 
		onStart : function (event){
			day.show()
		}, 
		onStop : function (event){
			day.hide()
		},
		onStep : function (event){
	  	console.log(day.pointer)
  		if(daySeqCursor >= daySeq.length){
  			day.hide()
  		}else{
	  		day.pointer = daySeq[daySeqCursor] -1;
	  		daySeqCursor ++;
	  	}
	  }, 
		measure : 1, 
		steps : [1]
	});

	sequencer.registerSequence({
  	name : "draprose",
  	start : 37,
  	stop : 69,
  	onStart : function (event){
  		drap.show()
  	},
  	onStop : function (event){
     drap.hide ()
  	},
  	onStep : function (event){
  		console.log(drap.pointer)
  		if(drapSeqCursor >= drapSeq.length){
  			drap.hide()
  		}else{
	  		drap.pointer = drapSeq[drapSeqCursor] -1;
	  		drapSeqCursor ++;
	  	}
  	},
  	measure : 1,
  	steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12]
  });

  sequencer.registerSequence({
  	name : "hairflowing",
  	start : 37,
  	stop : 69,
  	onStart : function (event){
  		ginger.show()
  	},
  	onStop : function (event){
     ginger.hide ()
  	},
  	onStep : function (event){
  		console.log(ginger.pointer)
  		if(gingerSeqCursor >= gingerSeq.length){
  			ginger.hide()
  		}else{
	  		ginger.pointer = gingerSeq[gingerSeqCursor] -1;
	  		gingerSeqCursor ++;
	  	}
  	},
  	measure : 1,
  	steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12]
  });

  sequencer.registerSequence({
  	name : "otherotherTrain",
  	start : 35,
  	stop : 38,
  	onStart : function (event){
  		train3.show()
  	},
  	onStop : function (event){
     train3.hide ()
  	},
  	onStep : function (event){
  		console.log(train3.pointer)
  		if(train3SeqCursor >= train3Seq.length){
  			train3.hide()
  		}else{
	  		train3.pointer = train3Seq[train3SeqCursor] -1;
	  		train3SeqCursor ++;
	  	}
  	},
  	measure : 1,
  	steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12]
  });

  sequencer.registerSequence({
  	name : "fly",
  	start : 38,
  	stop : 69,
  	onStart : function (event){
  		mongolfiere.show()
  	},
  	onStop : function (event){
     mongolfiere.hide ()
  	},
  	onStep : function (event){
  		
  	},
  	measure : 1,
  	steps : [1]
  });

  sequencer.registerSequence({
  	name : "kittyCat",
  	start : 22,
  	stop : 34,
  	onStart : function (event){
  		cat.show()
  	},
  	onStop : function (event){
     cat.hide ()
  	},
  	onStep : function (event){
  		console.log(cat.pointer)
  		if(catSeqCursor >= catSeq.length){
  			cat.hide()
  		}else{
	  		cat.pointer = catSeq[catSeqCursor] -1;
	  		catSeqCursor ++;
	  	}
  	},
  	measure : 1,
  	steps : [1]
  });
}

function draw(){
	sequencer.update();
	background(0);
	
  //sunset.setPointer(1 - millis()/1000 % 1);
	
	if(sunset.visible){
		sunset.display();
	}

	if(clothes.visible){
		clothes.display()
	}

	if(fire.visible){
		fire.display()
	}

  if(train.visible){
		train.display()
	}

	if(train2.visible){
		train2.display()
	}

	if(bn.visible){
		bn.display()
	} 

	if(walk.visible){
		walk.display()
	}

	if(day.visible){
		day.display()
	}

	if(drap.visible){
		drap.display()
	}

	if(ginger.visible){
		ginger.display()
	}

	if(train3.visible){
		train3.display()
	}

	if(mongolfiere.visible){
		mongolfiere.setPosition(mongolfiere.x-0.25, mongolfiere.y)
		mongolfiere.display()
	}

	if(cat.visible){
		cat.display()
	}
}
