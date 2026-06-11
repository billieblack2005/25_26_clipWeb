/*----------------------------------------*\
  23_24_AN1_clipWeb - main.js
  @author Achilles Ben Saïd
  @Date:   2024-02-23 00:24:49
  @Last Modified time: 2024-02-23 08:58:36
\*----------------------------------------*/
let BPM = 115;
let audioPath = "assets/audio/Semence.mp3";
let sequencer;

let anime0;
let dent;
let anime1;

let bg = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	sequencer = new Sequencer(audioPath, BPM, false);
//change "true" à "false" pour cacher le num rouge.



    //Text animé!!
    dent= new Animator (1, 1, "./assets/images/ref/dent.png")
    imageMode(CENTER);
    dent.setSize(223, 257);
    dent.setPosition(+220,+199);

    lobo= new Animator (1, 1, "./assets/images/ref/lobo.png")
    imageMode(CENTER);
    lobo.setSize(223, 257);
    lobo.setPosition(435,+199);

    boujloud= new Animator (1, 1, "./assets/images/ref/boujloud.png")
    imageMode(CENTER);
    boujloud.setSize(223, 257);
    boujloud.setPosition(655,+199);

    oeil= new Animator (1, 1, "./assets/images/ref/oeil.png")
    imageMode(CENTER);
    oeil.setSize(223, 257);
    oeil.setPosition(+875,+199);

    taillade= new Animator (1, 1, "./assets/images/ref/taillade.png")
    imageMode(CENTER);
    taillade.setSize(223, 257);
    taillade.setPosition(+1095,+199);

    eve= new Animator (1, 1, "./assets/images/ref/eve.png")
    imageMode(CENTER);
    eve.setSize(223, 257);
    eve.setPosition(+1300,+199);

    bouc= new Animator (1, 1, "./assets/images/ref/bouc.png")
    imageMode(CENTER);
    bouc.setSize(223, 257);
    bouc.setPosition(+1500,+199);


    nos= new Animator (1, 1, "./assets/images/ref/nos.png")
    imageMode(CENTER);
    nos.setSize(223, 257);
    nos.setPosition(+1500,+699);

    panta= new Animator (1, 1, "./assets/images/ref/panta.png")
    imageMode(CENTER);
    panta.setSize(223, 257);
    panta.setPosition(+1300,+699);

    anger= new Animator (1, 1, "./assets/images/ref/anger.jpg")
    imageMode(CENTER);
    anger.setSize(223, 257);
    anger.setPosition(+1095,+699);

    sbs= new Animator (1, 1, "./assets/images/ref/sbs.jpg")
    imageMode(CENTER);
    sbs.setSize(223, 257);
    sbs.setPosition(+875,+699);

    rot= new Animator (1, 1, "./assets/images/ref/rot.jpg")
    imageMode(CENTER);
    rot.setSize(223, 257);
    rot.setPosition(+655,+699);

    thinking= new Animator (1, 1, "./assets/images/ref/thinking.jpg")
    imageMode(CENTER);
    thinking.setSize(223, 257);
    thinking.setPosition(+435,+699);

    fetish= new Animator (1, 1, "./assets/images/ref/fetish.jpg")
    imageMode(CENTER);
    fetish.setSize(223, 257);
    fetish.setPosition(+220,+699);

    tableau= new Animator (1, 1, "./assets/images/ref/tableau.png")
    imageMode(CENTER);
    tableau.setSize(700,700);
    tableau.setPosition(+750,+320);

    eglise= new Animator (1, 1, "./assets/images/ref/eglise.png")
    imageMode(CENTER);
    eglise.setSize(223, 257);
    eglise.setPosition(+120,+599);


    wesh= new Animator (1, 1, "./assets/images/ref/wesh.jpg")
    imageMode(CENTER);
    wesh.setSize(323, 357);
    wesh.setPosition(+120,+400);

    visage= new Animator (1, 1, "./assets/images/ref/visage.jpg")
    imageMode(CENTER);
    visage.setSize(323, 357);
    visage.setPosition(+420,+400);

    rouge= new Animator (1, 1, "./assets/images/ref/rouge.jpg")
    imageMode(CENTER);
    rouge.setSize(323, 357);
    rouge.setPosition(+1280,+400);

    menot= new Animator (1, 1, "./assets/images/ref/menot.jpg")
    imageMode(CENTER);
    menot.setSize(323, 357);
    menot.setPosition(+1590,+400);


    hands= new Animator (1, 1, "./assets/images/ref/hands.jpg")
    imageMode(CENTER);
    hands.setSize(323, 357);
    hands.setPosition(+120,+400);

    ange= new Animator (1, 1, "./assets/images/ref/ange.jpg")
    imageMode(CENTER);
    ange.setSize(323, 357);
    ange.setPosition(+420,+400);

    flesh= new Animator (1, 1, "./assets/images/ref/flesh.jpg")
    imageMode(CENTER);
    flesh.setSize(323, 357);
    flesh.setPosition(+1280,+400);

    camisol= new Animator (1, 1, "./assets/images/ref/camisol.jpg")
    imageMode(CENTER);
    camisol.setSize(323, 357);
    camisol.setPosition(+1590,+400);

    crane= new Animator (1, 1, "./assets/images/ref/crane.jpg")
    imageMode(CENTER);
    crane.setSize(700,700);
    crane.setPosition(+750,+320);

    letmein= new Animator (1, 1, "./assets/images/ref/letmein.jpg")
    imageMode(CENTER);
    letmein.setSize(423, 457);
    letmein.setPosition(+490,+400);

    hang= new Animator (1, 1, "./assets/images/ref/hang.jpg")
    imageMode(CENTER);
    hang.setSize(423, 457);
    hang.setPosition(+990,+690);

    noir= new Animator (1, 1, "./assets/images/ref/noir.jpg")
    imageMode(CENTER);
    noir.setSize(1920,1085);
    noir.setPosition(+750,+525);

    chronos= new Animator (1, 1, "./assets/images/ref/chronos.jpg")
    imageMode(CENTER);
    chronos.setSize(960,1085);
    chronos.setPosition(+1300,+425);

    miam= new Animator (1, 1, "./assets/images/ref/miam.jpg")
    imageMode(CENTER);
    miam.setSize(960,1085);
    miam.setPosition(+350,+425);

    dents= new Animator (1, 1, "./assets/images/ref/dents.jpg")
    imageMode(CENTER);
    dents.setSize(423, 457);
    dents.setPosition(+490,+400);



    ironmaiden= new Animator (1, 1, "./assets/images/ref/ironmaiden.jpg")
    imageMode(CENTER);
    ironmaiden.setSize(323, 357);
    ironmaiden.setPosition(+120,+400);

    langue= new Animator (1, 1, "./assets/images/ref/langue.jpg")
    imageMode(CENTER);
    langue.setSize(323, 357);
    langue.setPosition(+420,+400);

    latex= new Animator (1, 1, "./assets/images/ref/latex.jpg")
    imageMode(CENTER);
    latex.setSize(323, 357);
    latex.setPosition(+1280,+400);

    pussy= new Animator (1, 1, "./assets/images/ref/pussy.jpg")
    imageMode(CENTER);
    pussy.setSize(323, 357);
    pussy.setPosition(+1590,+400);


    vierge= new Animator (1, 1, "./assets/images/ref/vierge.jpg")
    imageMode(CENTER);
    vierge.setSize(323, 357);
    vierge.setPosition(+120,+400);

    becoming= new Animator (1, 1, "./assets/images/ref/becoming.jpg")
    imageMode(CENTER);
    becoming.setSize(323, 357);
    becoming.setPosition(+420,+400);
    
    god= new Animator (1, 1, "./assets/images/ref/god.jpg")
    imageMode(CENTER);
    god.setSize(323, 357);
    god.setPosition(+1280,+400);

    cogito= new Animator (1, 1, "./assets/images/ref/cogito.jpg")
    imageMode(CENTER);
    cogito.setSize(323, 357);
    cogito.setPosition(+1590,+400);

    degrade= new Animator (1, 1, "./assets/images/ref/degrade.jpg")
    imageMode(CENTER);
    degrade.setSize(1920,1085);
    degrade.setPosition(+750,+525);

    nails= new Animator (1, 1, "./assets/images/ref/nails.jpg")
    imageMode(CENTER);
    nails.setSize(600,600);
    nails.setPosition(+1350,+425);

    men= new Animator (1, 1, "./assets/images/ref/men.jpg")
    imageMode(CENTER);
    men.setSize(400,400);
    men.setPosition(+850,+525);

    cor= new Animator (1, 1, "./assets/images/ref/cor.jpg")
    imageMode(CENTER);
    cor.setSize(600,600);
    cor.setPosition(+350,+425);

    jen= new Animator (1, 1, "./assets/images/ref/jen.jpg")
    imageMode(CENTER);
    jen.setSize(600,600);
    jen.setPosition(+650,+425);

    cor2= new Animator (1, 1, "./assets/images/ref/cor2.jpg")
    imageMode(CENTER);
    cor2.setSize(600,600);
    cor2.setPosition(+1050,+425);





    anime0= new Animator(0,43,"./assets/images/vraifond/_imgNum_.png")
    anime0.setSize(1920,1080);
    imageMode(CENTER);
    anime0.setPosition(width/2,height/2)

    anime1= new Animator(1,6,"./assets/images/fond3/_imgNum_.png")
    anime1.setSize(500,500);
    imageMode(CENTER);
    anime1.setPosition(width/2,height/2)



//text just showing up. 
    sequencer.registerSequence({
        name: "dent",
        start:23,
        stop:41,
        onStart : function (event){
            dent.show();
        }, 
        onStop : function (event){
            dent.hide();
        },
        onStep : function (event){
          dent.next();
        },  
    })

    sequencer.registerSequence({
        name: "lobo",
        start:26,
        stop:43,
        onStart : function (event){
            lobo.show();
        }, 
        onStop : function (event){
            lobo.hide();
        },
        onStep : function (event){
          lobo.next();
        },  
    })

sequencer.registerSequence({
        name: "boujloud",
        start:28,
        stop:46,
        onStart : function (event){
            boujloud.show();
        }, 
        onStop : function (event){
            boujloud.hide();
        },
        onStep : function (event){
          boujloud.next();
        },  
    })


sequencer.registerSequence({
        name: "oeil",
        start:31,
        stop:48,
        onStart : function (event){
            oeil.show();
        }, 
        onStop : function (event){
            oeil.hide();
        },
        onStep : function (event){
          oeil.next();
        },  
    })

sequencer.registerSequence({
        name: "taillade",
        start:34,
        stop:50,
        onStart : function (event){
            taillade.show();
        }, 
        onStop : function (event){
            taillade.hide();
        },
        onStep : function (event){
          taillade.next();
        },  
    })


sequencer.registerSequence({
        name: "eve",
        start:36,
        stop:52,
        onStart : function (event){
            eve.show();
        }, 
        onStop : function (event){
            eve.hide();
        },
        onStep : function (event){
          eve.next();
        },  
    })

sequencer.registerSequence({
        name: "bouc",
        start:39,
        stop:54,
        onStart : function (event){
            bouc.show();
        }, 
        onStop : function (event){
            bouc.hide();
        },
        onStep : function (event){
          bouc.next();
        },  
    })

sequencer.registerSequence({
        name: "nos",
        start:42,
        stop:58,
        onStart : function (event){
            nos.show();
        }, 
        onStop : function (event){
            nos.hide();
        },
        onStep : function (event){
          nos.next();
        },  
    })


sequencer.registerSequence({
        name: "panta",
        start:44,
        stop:58,
        onStart : function (event){
            panta.show();
        }, 
        onStop : function (event){
            panta.hide();
        },
        onStep : function (event){
          panta.next();
        },  
    })


sequencer.registerSequence({
        name: "anger",
        start:47,
        stop:58,
        onStart : function (event){
            anger.show();
        }, 
        onStop : function (event){
            anger.hide();
        },
        onStep : function (event){
            anger.next();
        },  
    })

sequencer.registerSequence({
        name: "sbs",
        start:49,
        stop:58,
        onStart : function (event){
            sbs.show();
        }, 
        onStop : function (event){
            sbs.hide();
        },
        onStep : function (event){
            sbs.next();
        },  
    })

sequencer.registerSequence({
        name: "rot",
        start:51,
        stop:58,
        onStart : function (event){
            rot.show();
        }, 
        onStop : function (event){
            rot.hide();
        },
        onStep : function (event){
            rot.next();
        },  
    })


sequencer.registerSequence({
        name: "thinking",
        start:53,
        stop:58,
        onStart : function (event){
            thinking.show();
        }, 
        onStop : function (event){
            thinking.hide();
        },
        onStep : function (event){
            rot.next();
        },  
    })


sequencer.registerSequence({
        name: "fetish",
        start:55,
        stop:58,
        onStart : function (event){
            fetish.show();
        }, 
        onStop : function (event){
            fetish.hide();
        },
        onStep : function (event){
            fetish.next();
        },  
    })

sequencer.registerSequence({
        name: "tableau",
        start:59,
        stop:65,
        onStart : function (event){
            tableau.show();
        }, 
        onStop : function (event){
            tableau.hide();
        },
        onStep : function (event){
            tableau.next();
        },  
    })

sequencer.registerSequence({
        name: "eglise",
        start:62,
        stop:65,
        onStart : function (event){
            eglise.show();
        }, 
        onStop : function (event){
            eglise.hide();
        },
        onStep : function (event){
            eglise.next();
        },  
    })

sequencer.registerSequence({
        name: "wesh",
        start:72,
        stop:90,
        onStart : function (event){
            wesh.show();
        }, 
        onStop : function (event){
            wesh.hide();
        },
        onStep : function (event){
            wesh.next();
        },  
    })

sequencer.registerSequence({
        name: "visage",
        start:77,
        stop:90,
        onStart : function (event){
            visage.show();
        }, 
        onStop : function (event){
            visage.hide();
        },
        onStep : function (event){
            visage.next();
        },  
    })

sequencer.registerSequence({
        name: "rouge",
        start:82,
        stop:90,
        onStart : function (event){
            rouge.show();
        }, 
        onStop : function (event){
            rouge.hide();
        },
        onStep : function (event){
            rouge.next();
        },  
    })

sequencer.registerSequence({
        name: "menot",
        start:88,
        stop:90,
        onStart : function (event){
            menot.show();
        }, 
        onStop : function (event){
            menot.hide();
        },
        onStep : function (event){
            menot.next();
        },  
    })

sequencer.registerSequence({
        name: "hands",
        start:93,
        stop:110,
        onStart : function (event){
            hands.show();
        }, 
        onStop : function (event){
            hands.hide();
        },
        onStep : function (event){
            hands.next();
        },  
    })

sequencer.registerSequence({
        name: "ange",
        start:99,
        stop:110,
        onStart : function (event){
            ange.show();
        }, 
        onStop : function (event){
            ange.hide();
        },
        onStep : function (event){
            ange.next();
        },  
    })
sequencer.registerSequence({
        name: "flesh",
        start:104,
        stop:110,
        onStart : function (event){
            flesh.show();
        }, 
        onStop : function (event){
            flesh.hide();
        },
        onStep : function (event){
            flesh.next();
        },  
    })

sequencer.registerSequence({
        name: "camisol",
        start:109,
        stop:110,
        onStart : function (event){
            camisol.show();
        }, 
        onStop : function (event){
            camisol.hide();
        },
        onStep : function (event){
            camisol.next();
        },  
    })


sequencer.registerSequence({
        name: "crane",
        start:121,
        stop:129,
        onStart : function (event){
            crane.show();
        }, 
        onStop : function (event){
            crane.hide();
        },
        onStep : function (event){
            crane.next();
        },  
    })

sequencer.registerSequence({
        name: "letmein",
        start:122,
        stop:130,
        onStart : function (event){
            letmein.show();
        }, 
        onStop : function (event){
            letmein.hide();
        },
        onStep : function (event){
            if(event.step%2==0){
                letmein.hide();
            }else{
                letmein.show();
            }
        },  
    })

sequencer.registerSequence({
        name: "hang",
        start:133,
        stop:134,
        onStart : function (event){
            hang.show();
        }, 
        onStop : function (event){
            hang.hide();
        },
        onStep : function (event){
            hang.next();
        },  
    })

sequencer.registerSequence({
        name: "noir",
        start:131,
        stop:131,
        onStart : function (event){
            noir.show();
        }, 
        onStop : function (event){
            noir.hide();
        },
        onStep : function (event){
            noir.next();
        },  
    })

sequencer.registerSequence({
        name: "chronos",
        start:138,
        stop:139,
        onStart : function (event){
            chronos.show();
        }, 
        onStop : function (event){
            chronos.hide();
        },
        onStep : function (event){
            chronos.next();
        },  
    })

sequencer.registerSequence({
        name: "miam",
        start:137,
        stop:139,
        onStart : function (event){
            miam.show();
        }, 
        onStop : function (event){
            miam.hide();
        },
        onStep : function (event){
            miam.next();
        },  
    })

sequencer.registerSequence({
        name: "dents",
        start:134,
        stop:136,
        onStart : function (event){
            dents.show();
        }, 
        onStop : function (event){
            dents.hide();
        },
        onStep : function (event){
            dents.next();
        },  
    })

sequencer.registerSequence({
        name: "cor",
        start:141,
        stop:147,
        onStart : function (event){
            cor.show();
        }, 
        onStop : function (event){
            cor.hide();
        },
        onStep : function (event){
            cor.next();
        },  
    })

sequencer.registerSequence({
        name: "jen",
        start:143,
        stop:147,
        onStart : function (event){
            jen.show();
        }, 
        onStop : function (event){
            jen.hide();
        },
        onStep : function (event){
            jen.next();
        },  
    })

sequencer.registerSequence({
        name: "cor2",
        start:145,
        stop:147,
        onStart : function (event){
            cor2.show();
        }, 
        onStop : function (event){
            cor2.hide();
        },
        onStep : function (event){
            cor2.next();
        },  
    })

sequencer.registerSequence({
        name: "nails",
        start:146,
        stop:147,
        onStart : function (event){
            nails.show();
        }, 
        onStop : function (event){
            nails.hide();
        },
        onStep : function (event){
            nails.next();
        },  
    })




sequencer.registerSequence({
        name: "ironmaiden",
        start:201,
        stop:219,
        onStart : function (event){
            ironmaiden.show();
        }, 
        onStop : function (event){
            ironmaiden.hide();
        },
        onStep : function (event){
            ironmaiden.next();
        },  
    })


        sequencer.registerSequence({
        name: "langue",
        start:207,
        stop:219,
        onStart : function (event){
            langue.show();
        }, 
        onStop : function (event){
            langue.hide();
        },
        onStep : function (event){
            langue.next();
        },  
    })

        sequencer.registerSequence({
        name: "latex",
        start:213,
        stop:219,
        onStart : function (event){
            latex.show();
        }, 
        onStop : function (event){
            latex.hide();
        },
        onStep : function (event){
            latex.next();
        },  
    })

        sequencer.registerSequence({
        name: "pussy",
        start:217,
        stop:219,
        onStart : function (event){
            pussy.show();
        }, 
        onStop : function (event){
            pussy.hide();
        },
        onStep : function (event){
            pussy.next();
        },  
    })

        sequencer.registerSequence({
        name: "vierge",
        start:223,
        stop:240,
        onStart : function (event){
            vierge.show();
        }, 
        onStop : function (event){
            vierge.hide();
        },
        onStep : function (event){
            vierge.next();
        },  
    })

sequencer.registerSequence({
        name: "becoming",
        start:228,
        stop:240,
        onStart : function (event){
            becoming.show();
        }, 
        onStop : function (event){
            becoming.hide();
        },
        onStep : function (event){
            becoming.next();
        },  
    })

sequencer.registerSequence({
        name: "god",
        start:234,
        stop:240,
        onStart : function (event){
            god.show();
        }, 
        onStop : function (event){
            god.hide();
        },
        onStep : function (event){
            god.next();
        },  
    })

sequencer.registerSequence({
        name: "degrade",
        start:244,
        stop:246,
        onStart : function (event){
            degrade.show();
        }, 
        onStop : function (event){
            degrade.hide();
        },
        onStep : function (event){
            degrade.next();
        },  
    })

sequencer.registerSequence({
        name: "men",
        start:244,
        stop:246,
        onStart : function (event){
            men.show();
        }, 
        onStop : function (event){
            men.hide();
        },
        onStep : function (event){
            men.next();
        },  
    })



        sequencer.registerSequence({
        name: "cogito",
        start:239,
        stop:240,
        onStart : function (event){
            cogito.show();
        }, 
        onStop : function (event){
            cogito.hide();
        },
        onStep : function (event){
            cogito.next();
        },  
    })

        sequencer.registerSequence({
        name : "fond3", 
        start : 154, 
        stop : 172, 
         onStart : function (event){
            anime1.show();
        }, 
        onStop : function (event){
            anime1.hide();
        },
        onStep : function (event){
            anime1.next(true);

        }, 
        measure : 1, 
        steps : [1,1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });

        sequencer.registerSequence({
        name : "fondbase", 
        start : 1, 
        stop : 262, 
         onStart : function (event){
            anime0.show();
        }, 
        onStop : function (event){
            anime0.hide();
        },
        onStep : function (event){
            anime0.next(true);

        }, 
        measure : 1, 
        steps : [1,1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6]
    });
}



	
     

function draw(){
    sequencer.update();

    background(bg);


if(anime0.visible){
    anime0.display();
  }

if(anime1.visible){
    anime1.display();
  }

  if(lobo.visible){
    lobo.display();
  }

if(boujloud.visible){
    boujloud.display();
  }


if(oeil.visible){
    oeil.display();
  }


  if(taillade.visible){
    taillade.display();
  }


if(bouc.visible){
    bouc.display();
  }

  if(eve.visible){
    eve.display();
  }

 if(nos.visible){
    nos.display();
  }

if(panta.visible){
    panta.display();
  }

  if(anger.visible){
    anger.display();
  }

if(sbs.visible){
    sbs.display();
  }


  if(rot.visible){
    rot.display();
  }

  if(thinking.visible){
    thinking.display();
  }

if(fetish.visible){
    fetish.display();
  }

if(tableau.visible){
    tableau.display();
  }

if(eglise.visible){
    eglise.display();
  }

  if(wesh.visible){
    wesh.display();
  }

if(visage.visible){
    visage.display();
  }

  if(rouge.visible){
    rouge.display();
  }

  if(menot.visible){
    menot.display();
  }

  if(hands.visible){
    hands.display();
  }

if(ange.visible){
    ange.display();
  }
  
if(flesh.visible){
    flesh.display();
  }

  if(camisol.visible){
    camisol.display();
  }

 if(crane.visible){
    crane.display();
  }

  if(letmein.visible){
    letmein.display();
  }

  if(hang.visible){
    hang.display();
  }

  if(noir.visible){
    noir.display();
  }

  if(miam.visible){
    miam.display();
  }

 if(chronos.visible){
    chronos.display();
  }

 if(dents.visible){
    dents.display();
  }

 if(ironmaiden.visible){
    ironmaiden.display();
  }

 if(langue.visible){
    langue.display();
  }

 if(latex.visible){
    latex.display();
  }

  if(pussy.visible){
    pussy.display();
  }

 if(vierge.visible){
    vierge.display();
  }

if(becoming.visible){
    becoming.display();
  }

if(god.visible){
    god.display();
  }

  if(cogito.visible){
    cogito.display();
  }

if(degrade.visible){
    degrade.display();
  }

  if(men.visible){
    men.display();
  }

if(cor.visible){
    cor.display();
  }

  if(jen.visible){
    jen.display();
  }

  if(cor2.visible){
    cor2.display();
  }

  if(nails.visible){
    nails.display();
  }


if (dent.visible){
    dent.display();
}



}
