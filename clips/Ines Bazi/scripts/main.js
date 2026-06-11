/*----------------------------------------*\
  25_26_AN1_clipWeb - main.js
  Ines Bazi
\*----------------------------------------*/

'use strict';
p5.disableFriendlyErrors = true;

const FPS       = 24;
const AUDIO_SRC = 'assets/audio/Canta el Agua.mp3';

const PT1_SEGS = [
  { dir: '0_12_pt1',  n: 288 },
  { dir: '12_24_pt1', n: 288 },
  { dir: '24_36_pt1', n: 288 },
  { dir: '36_48_pt1', n: 288 },
  { dir: '48_52_pt1', n: 96  },
  { dir: '52_60_pt1', n: 193 },
];

const PT2_SEGS = [
  { dir: '0_12_pt2',  n: 288 },
  { dir: '12_24_pt2', n: 288 },
  { dir: '24_36_pt2', n: 288 },
  { dir: '36_48_pt2', n: 288 },
  { dir: '48_52_pt2', n: 96  },
  { dir: '52_60_pt2', n: 192 },
  { dir: '60_72_pt2', n: 288 },
  { dir: '72_83_pt2', n: 265 },
];

let pt1Imgs  = [];   
let pt2Imgs  = [];   
let audioEl;         
let loaded   = 0;
let total    = 0;
let ready    = false;
let started  = false;
let loaderEl, percentEl;


function buildPaths(segs, base) {
  const paths = [];
  for (const seg of segs) {
    for (let i = 1; i <= seg.n; i++) {
      const num = String(i).padStart(3, '0');
      paths.push(`${base}/${seg.dir}/ezgif-frame-${num}.jpg`);
    }
  }
  return paths;
}


function loadImages(paths) {
  const imgs = new Array(paths.length);
  for (let i = 0; i < paths.length; i++) {
    const img  = new Image();
    img.onload = img.onerror = onOneLoaded;
    img.src    = paths[i];
    imgs[i]    = img;
  }
  return imgs;
}

function onOneLoaded() {
  loaded++;
  const pct = Math.round(loaded / total * 100);
  if (percentEl) percentEl.textContent = pct + ' %';
  if (loaded >= total) {
    ready = true;
    if (loaderEl) loaderEl.classList.add('hide');
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);

 
  pixelDensity(1);

  
  frameRate(60);

  loaderEl  = document.getElementById('loader');
  percentEl = document.getElementById('percent');

  loaderEl.classList.remove('hide');
  percentEl.textContent = '0 %';

  // chargement frames
  const p1 = buildPaths(PT1_SEGS, 'assets/Images/pt1');
  const p2 = buildPaths(PT2_SEGS, 'assets/Images/pt2');
  total    = p1.length + p2.length;   // 3 434 frames 
  pt1Imgs  = loadImages(p1);
  pt2Imgs  = loadImages(p2);

  
  audioEl         = document.createElement('audio');
  audioEl.src     = AUDIO_SRC;
  audioEl.preload = 'auto';
  document.body.appendChild(audioEl);
  audioEl.addEventListener('ended', () => { started = false; });

  background(0);
  const btn = document.getElementById('playBtn');
btn.addEventListener('click', () => {
  if (!ready) return;
  audioEl.play().catch(err => console.error(err));
  started = true;
  btn.classList.add('hide');
});
}

function draw() {
  background(0);

  if (!started) {
  return;
}

  // clic
  if (!started) {
    fill(255);
    noStroke();
    
  }

  
  const frame = Math.floor(audioEl.currentTime * FPS);
  const ctx   = drawingContext; 

  let img;
  if (frame < pt1Imgs.length) {
    
    img = pt1Imgs[frame];
  } else {
   
    const i2 = Math.min(frame - pt1Imgs.length, pt2Imgs.length - 1);
    img = pt2Imgs[i2];
  }

  if (img && img.complete && img.naturalWidth > 0) {
    ctx.drawImage(img, 0, 0, width, height);
  }

  
}



/* start */
function mousePressed() {
  if (!ready || started) return;
  audioEl.play().catch(err => console.error('Audio play error:', err));
  started = true;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
const btn = document.getElementById('playBtn');
btn.addEventListener('click', () => {
  if (!ready) return;
  audioEl.play().catch(err => console.error(err));
  started = true;
  btn.classList.add('hide');
});