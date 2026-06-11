/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 120;
let audioPath = "assets/audio/A MOTH UNDER THE SKIN.mp3";
let sequencer;
let anim0;
let anim1;
let anim2;
let anim3;
let anim4;
let anim5;
let anim6;
let anim7;
let anim71;
let anim72;
let anim8;
let anim9;
let anim10;
let anim11;
let anim12;
let anim121;
let anim122;
let anime13;
let anim14;
let anim15;
let anim16;
let anim17;
let anim18;
let anim19;
let anim20;
let anim21;
let anim22;
let anim23;
let anim211;
let anim24;
let anim25;
let anim26;
let anim27;
let anim28;
let anim29;
let anim30;
let bg = 0;

// vitesses
/*

Très lente: [1]

Lente: [1, 1+1/7, 1+2/7, 1+3/7, 1+4/7, 1+5/7, 1+6/7]

Moyenne: [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]

la plus rapide: [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]

*/

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);
    
    anim1= new Animator(1, 10,"./assets/images/roses/_imgNum_.jpg")
    anim1.setSize(width, height);
   // anim1.setPosition(width/2,height/2)

   anim2= new Animator(50, 241,"./assets/images/singlerose/_imgNum_.jpg")
    anim2.setSize(width, height);

    anim3= new Animator(1, 65,"./assets/images/singlerose/white_imgNum_.jpg")
    anim3.setSize(width, height);

    anim4= new Animator(50, 241,"./assets/images/singlerose/_imgNum_.jpg")
    anim4.setSize(width, height);

    anim5= new Animator(1, 65,"./assets/images/singlerose/white_imgNum_.jpg")
    anim5.setSize(width, height);

    anim6= new Animator(1, 14,"./assets/images/butterfly/altreverse_imgNum_.jpg")
    anim6.setSize(width, height);
    
    anim7= new Animator(1, 3,"./assets/images/abnormal1/_imgNum_.jpg")
    anim7.setSize(width, height);

    //comprendre 71 et 72 comme 7.1 7.2
    anim71= new Animator(4, 6,"./assets/images/abnormal1/_imgNum_.jpg")
    anim71.setSize(width, height);

    anim72= new Animator(7, 9,"./assets/images/abnormal1/_imgNum_.jpg")
    anim72.setSize(width, height);

    anim8= new Animator(1, 15,"./assets/images/brokenrose/_imgNum_.jpg")
    anim8.setSize(width, height);

    anim9= new Animator(1, 22,"./assets/images/thunder/_imgNum_.jpg")
    anim9.setSize(width, height);

    anim11= new Animator(1, 14,"./assets/images/butterfly/alt_imgNum_.jpg")
    anim11.setSize(width, height);

    anim12= new Animator(1, 3,"./assets/images/abnormal2/_imgNum_.jpg")
    anim12.setSize(width, height);

    //même principe 12.1 12.2

    anim121= new Animator(4, 6,"./assets/images/abnormal2/_imgNum_.jpg")
    anim121.setSize(width, height);

    anim122= new Animator(7, 9,"./assets/images/abnormal2/_imgNum_.jpg")
    anim122.setSize(width, height);

    anim13= new Animator(1, 217,"./assets/images/moonbasic/_imgNum_.jpg")
    anim13.setSize(width, height);

    anim14= new Animator(1, 52,"./assets/images/smilingmoon/_imgNum_.jpg")
    anim14.setSize(width, height);

    anim15= new Animator(1, 30,"./assets/images/butterflydada/_imgNum_.jpg")
    anim15.setSize(width, height);

    anim17= new Animator(31, 60,"./assets/images/butterflydada/_imgNum_.jpg")
    anim17.setSize(width, height);

    anim18= new Animator(61, 90,"./assets/images/butterflydada/_imgNum_.jpg")
    anim18.setSize(width, height);

    anim19= new Animator(91, 114,"./assets/images/butterflydada/_imgNum_.jpg")
    anim19.setSize(width, height);

    anim20= new Animator(110, 114,"./assets/images/butterflydada/_imgNum_.jpg")
    anim20.setSize(width, height);

    anim21= new Animator(1, 25,"./assets/images/tourbillonpause/_imgNum_.jpg")
    anim21.setSize(width, height);

    anim211= new Animator(1, 22,"./assets/images/thunder/_imgNum_.jpg")
    anim211.setSize(width, height);

    anim22= new Animator(1, 15,"./assets/images/fulldada/_imgNum_.jpg")
    anim22.setSize(width, height);

    anim23= new Animator(16, 26,"./assets/images/fulldada/_imgNum_.jpg")
    anim23.setSize(width, height);


    anim0= new Animator(1,2,"./assets/images/moth/moth_imgNum_.jpg")
    anim0.setSize(width, height);

    anim24= new Animator(1, 25,"./assets/images/pauselune/_imgNum_.jpg")
    anim24.setSize(width, height);

    anim25= new Animator(1, 14,"./assets/images/mothflying/_imgNum_.jpg")
    anim25.setSize(width, height)

    anim26= new Animator(1, 241,"./assets/images/flymetothemoon/_imgNum_.jpg")
    anim26.setSize(width, height)

    anim27= new Animator(242, 338,"./assets/images/flymetothemoon/_imgNum_.jpg")
    anim27.setSize(width, height)

    anim28= new Animator(1, 80,"./assets/images/amothundertheskin/_imgNum_.jpg")
    anim28.setSize(width, height)

    anim281= new Animator(1, 80,"./assets/images/amothundertheskin/_imgNum_.jpg")
    anim281.setSize(width, height)

    anim281= new Animator(76, 77,"./assets/images/amothundertheskin/_imgNum_.jpg")
    anim281.setSize(width, height)

    anim29= new Animator(1, 25,"./assets/images/credits/_imgNum_.jpg")
    anim29.setSize(width, height)

    anim30= new Animator(23, 25,"./assets/images/credits/_imgNum_.jpg")
    anim30.setSize(width, height)

   // anim0.setPosition(width/2,height/2)

   
    // animation en images
	sequencer.registerSequence({
		name : "roses", 
		start : 1, 
		stop : 17, 
		 onStart : function (event){
            anim1.show();
        }, 
        onStop : function (event){
            anim1.hide();
        },
        onStep : function (event){
            anim1.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "singlerose1", 
		start : 18, 
		stop : 29, 
		 onStart : function (event){
            anim2.show();
        }, 
        onStop : function (event){
            anim2.hide();
        },
        onStep : function (event){
            anim2.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "singlesrose2", 
		start : 30, 
		stop : 33, 
		 onStart : function (event){
            anim3.show();
        }, 
        onStop : function (event){
            anim3.hide();
        },
        onStep : function (event){
            anim3.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "singlerose3", 
		start : 34, 
		stop : 45, 
		 onStart : function (event){
            anim4.show();
        }, 
        onStop : function (event){
            anim4.hide();
        },
        onStep : function (event){
            anim4.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "singlerose4", 
		start : 46, 
		stop : 49, 
		 onStart : function (event){
            anim5.show();
        }, 
        onStop : function (event){
            anim5.hide();
        },
        onStep : function (event){
            anim5.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "butterfly1", 
		start : 50, 
		stop : 66, 
		 onStart : function (event){
            anim6.show();
        }, 
        onStop : function (event){
            anim6.hide();
        },
        onStep : function (event){
            anim6.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "abnormal1", 
		start : 67, 
		stop : 70, 
		 onStart : function (event){
            anim7.show();
        }, 
        onStop : function (event){
            anim7.hide();
        },
        onStep : function (event){
            anim7.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "abnormal11", 
		start : 71, 
		stop : 72, 
		 onStart : function (event){
            anim71.show();
        }, 
        onStop : function (event){
            anim71.hide();
        },
        onStep : function (event){
            anim71.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "abnormal12", 
		start : 72, 
		stop : 75, 
		 onStart : function (event){
            anim72.show();
        }, 
        onStop : function (event){
            anim72.hide();
        },
        onStep : function (event){
            anim72.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "brokenrose", 
		start : 76, 
		stop : 81, 
		 onStart : function (event){
            anim8.show();
        }, 
        onStop : function (event){
            anim8.hide();
        },
        onStep : function (event){
            anim8.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "thunder", 
		start : 82, 
		stop : 84, 
		 onStart : function (event){
            anim9.show();
        }, 
        onStop : function (event){
            anim9.hide();
        },
        onStep : function (event){
            anim9.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });



    // animation en images
	sequencer.registerSequence({
		name : "butterfly2", 
		start : 98, 
		stop : 113, 
		 onStart : function (event){
            anim11.show();
        }, 
        onStop : function (event){
            anim11.hide();
        },
        onStep : function (event){
            anim11.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "abnormal2", 
		start : 114, 
		stop : 117, 
		 onStart : function (event){
            anim12.show();
        }, 
        onStop : function (event){
            anim12.hide();
        },
        onStep : function (event){
            anim12.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "abnorma21", 
		start : 118, 
		stop : 120, 
		 onStart : function (event){
            anim121.show();
        }, 
        onStop : function (event){
            anim121.hide();
        },
        onStep : function (event){
            anim121.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });


    sequencer.registerSequence({
		name : "abnormal22", 
		start : 121, 
		stop : 123, 
		 onStart : function (event){
            anim122.show();
        }, 
        onStop : function (event){
            anim122.hide();
        },
        onStep : function (event){
            anim122.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "moon", 
		start : 85, 
		stop : 97, 
		 onStart : function (event){
            anim13.show();
        }, 
        onStop : function (event){
            anim13.hide();
        },
        onStep : function (event){
            anim13.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
        });

        sequencer.registerSequence({
		name : "smiling moon", 
		start : 123, 
		stop : 130, 
		 onStart : function (event){
            anim14.show();
        }, 
        onStop : function (event){
            anim14.hide();
        },
        onStep : function (event){
            anim14.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "colorbutterfly1", 
		start : 130, 
		stop : 135, 
		 onStart : function (event){
            anim15.show();
        }, 
        onStop : function (event){
            anim15.hide();
        },
        onStep : function (event){
            anim15.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });


    sequencer.registerSequence({
		name : "colorbutterfly2", 
		start : 134, 
		stop : 137, 
		 onStart : function (event){
            anim17.show();
        }, 
        onStop : function (event){
            anim17.hide();
        },
        onStep : function (event){
            anim17.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });



    sequencer.registerSequence({
		name : "colorbutterfly3", 
		start : 138, 
		stop : 140, 
		 onStart : function (event){
            anim18.show();
        }, 
        onStop : function (event){
            anim18.hide();
        },
        onStep : function (event){
            anim18.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "butterflytourbillon", 
		start : 141, 
		stop : 142, 
		 onStart : function (event){
            anim19.show();
        }, 
        onStop : function (event){
            anim19.hide();
        },
        onStep : function (event){
            anim19.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "butterflytourbillon2", 
		start : 143, 
		stop : 177, 
		 onStart : function (event){
            anim20.show();
        }, 
        onStop : function (event){
            anim20.hide();
        },
        onStep : function (event){
            anim20.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "pause", 
		start : 178, 
		stop : 192, 
		 onStart : function (event){
            anim21.show();
        }, 
        onStop : function (event){
            anim21.hide();
        },
        onStep : function (event){
            anim21.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "rawrXD", 
		start : 193, 
		stop : 193, 
		 onStart : function (event){
            anim211.show();
        }, 
        onStop : function (event){
            anim211.hide();
        },
        onStep : function (event){
            anim211.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "dada", 
		start : 194, 
		stop : 226, 
		 onStart : function (event){
            anim22.show();
        }, 
        onStop : function (event){
            anim22.hide();
        },
        onStep : function (event){
            anim22.next(true);
        }, 
        measure : 1, 
        steps : [1,1+1/2]
    });

    sequencer.registerSequence({
		name : "dada2", 
		start : 227, 
		stop : 240, 
		 onStart : function (event){
            anim23.show();
        }, 
        onStop : function (event){
            anim23.hide();
        },
        onStep : function (event){
            anim23.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    
 // animation en images
	sequencer.registerSequence({
		name : "my zero sequence", 
		start : 241, 
		stop : 245, 
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
        steps : [1,1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });


    sequencer.registerSequence({
		name : "pauselune", 
		start : 246, 
		stop : 256, 
		 onStart : function (event){
            anim24.show();
        }, 
        onStop : function (event){
            anim24.hide();
        },
        onStep : function (event){
            anim24.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "mothflying", 
		start : 257, 
		stop : 273, 
		 onStart : function (event){
            anim25.show();
        }, 
        onStop : function (event){
            anim25.hide();
        },
        onStep : function (event){
            anim25.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "flymetothemoon", 
		start : 274, 
		stop : 292, 
		 onStart : function (event){
            anim26.show();
        }, 
        onStop : function (event){
            anim26.hide();
        },
        onStep : function (event){
            anim26.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/12, 1+2/12, 1+3/12, 1+4/12, 1+5/12, 1+6/12, 1+7/12, 1+8/12, 1+9/12, 1+10/12, 1+11/12]
    });

    sequencer.registerSequence({
		name : "enterthemoon", 
		start : 293, 
		stop : 307, 
		 onStart : function (event){
            anim27.show();
        }, 
        onStop : function (event){
            anim27.hide();
        },
        onStep : function (event){
            anim27.next(true);
        }, 
        measure : 1, 
        steps : [1,1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "amothundeertheskin", 
		start : 308, 
		stop : 319, 
		 onStart : function (event){
            anim28.show();
        }, 
        onStop : function (event){
            anim28.hide();
        },
        onStep : function (event){
            anim28.next(true);
        }, 
        measure : 1, 
        steps : [1,1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "amothundeertheskinboucle", 
		start : 320, 
		stop : 322, 
		 onStart : function (event){
            anim281.show();
        }, 
        onStop : function (event){
            anim281.hide();
        },
        onStep : function (event){
            anim281.next(true);
        }, 
        measure : 1, 
        steps : [1,1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

    sequencer.registerSequence({
		name : "credits", 
		start : 323, 
		stop : 334, 
		 onStart : function (event){
            anim29.show();
        }, 
        onStop : function (event){
            anim29.hide();
        },
        onStep : function (event){
            anim29.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/2]
    });

    sequencer.registerSequence({
		name : "credits2", 
		start : 335, 
		stop : 340, 
		 onStart : function (event){
            anim30.show();
        }, 
        onStop : function (event){
            anim30.hide();
        },
        onStep : function (event){
            anim30.next(true);
        }, 
        measure : 1, 
        steps : [1, 1+1/2]
    });
}






function draw(){
    sequencer.update();

    background(bg);
    if(anim0.visible){
        
        anim0.display();
    }


    if(anim1.visible){
        anim1.display();
    }

    if(anim2.visible){
        anim2.display();
    }

    if(anim3.visible){
        anim3.display();
    }

    if(anim4.visible){
        anim4.display();
    }

    if(anim5.visible){
        anim5.display();
    }

    if(anim6.visible){
        anim6.display();
    }


    if(anim7.visible){
        anim7.display();
    }

    if(anim71.visible){
        anim71.display();
    }

    if(anim72.visible){
        anim72.display();
    }

    if(anim8.visible){
        anim8.display();
    }

    if(anim9.visible){
        anim9.display();
    }


    if(anim11.visible){
        anim11.display();
    }

    if(anim12.visible){
        anim12.display();
    }

    if(anim121.visible){
        anim121.display();
    }

    if(anim122.visible){
        anim122.display();
    }

    if(anim13.visible){
        anim13.display();
    }
    
    if(anim14.visible){
        anim14.display();
    }

    if(anim15.visible){
        anim15.display();
    }

    if(anim17.visible){
        anim17.display();
    }

    if(anim18.visible){
        anim18.display();
    }

    if(anim19.visible){
        anim19.display();
    }

    if(anim20.visible){
        anim20.display();
    }

    if(anim21.visible){
        anim21.display();
    }

    if(anim211.visible){
        anim211.display();
    }
    
    if(anim22.visible){
        anim22.display();
    }

    if(anim23.visible){
        anim23.display();
    }

    if(anim24.visible){
        anim24.display();
    }

    if(anim25.visible){
        anim25.display();
    }

    if(anim26.visible){
        anim26.display();
    }

    if(anim27.visible){
        anim27.display();
    }

    if(anim28.visible){
        anim28.display();
    }

    if(anim281.visible){
        anim281.display();
    }

    if(anim29.visible){
        anim29.display();
    }

    if(anim30.visible){
        anim30.display();
    }


}