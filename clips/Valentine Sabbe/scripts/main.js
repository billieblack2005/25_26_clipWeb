/*----------------------------------------*\
 25_26_clipWeb_main.js
 Valentine Sabbe (valentinesabbe@gmail.com)
 @date : 2026
\*----------------------------------------*/

const TOTAL_FRAMES = 4229;
const FPS          = 18;
const PRE_BUFFER   = 120;
const LOOK_AHEAD   = 200;
const KEEP_BEHIND  = 40;
const CONCURRENCY  = 10;

const pad = (n) => String(100000 + n);
const frameSrc = (i) => `assets/images/ascii-18ips-compressed/Composition 1_${pad(i)}.jpg`;

class FramePlayer {
  constructor(canvas, audio) {
    this.canvas   = canvas;
    this.ctx      = canvas.getContext("2d", { alpha: false });
    this.audio    = audio;
    this.frames   = new Array(TOTAL_FRAMES).fill(null);

    this.loadedCount  = 0;
    this.activeLoads  = 0;
    this.queue        = [];   
    this.isPlaying    = false;
    this.lastDrawn    = -1;
  }


  enqueue(index) {
    if (index < 0 || index >= TOTAL_FRAMES) return;
    if (this.frames[index] !== null) return;
    this.frames[index] = "loading";
    this.queue.push(index);
    this._drain();
  }

  _drain() {
    while (this.activeLoads < CONCURRENCY && this.queue.length > 0) {
      const index = this.queue.shift();
      this.activeLoads++;
      const img = new Image();
      img.onload = () => {
        this.frames[index] = img;
        this.loadedCount++;
        this.activeLoads--;
        this._drain();
      };
      img.onerror = () => {
        this.frames[index] = "error";
        this.activeLoads--;
        this._drain();
      };
      img.src = frameSrc(index);
    }
  }

  preload(onProgress, onReady) {
    let readyCalled = false;

    const check = () => {
      onProgress(Math.min(this.loadedCount / PRE_BUFFER, 1));
      if (!readyCalled && this.loadedCount >= PRE_BUFFER) {
        readyCalled = true;
        onReady();
      }
      if (this.loadedCount < PRE_BUFFER) {
        requestAnimationFrame(check);
      }
    };

    for (let i = 0; i < Math.min(PRE_BUFFER + 50, TOTAL_FRAMES); i++) {
      this.enqueue(i);
    }
    check();
  }

  play() {
    this.isPlaying = true;
    this.audio.play();
    this._tick();
  }

  _tick() {
    if (!this.isPlaying) return;

    const targetFrame = Math.min(
      Math.floor(this.audio.currentTime * FPS),
      TOTAL_FRAMES - 1
    );

    const f = this.frames[targetFrame];
    if (f && f !== "loading" && f !== "released" && f !== "error") {
      if (targetFrame !== this.lastDrawn) {
        this.ctx.drawImage(f, 0, 0, this.canvas.width, this.canvas.height);
        this.lastDrawn = targetFrame;
      }
    }

    const loadEnd = Math.min(targetFrame + LOOK_AHEAD, TOTAL_FRAMES - 1);
    for (let i = targetFrame; i <= loadEnd; i++) {
      if (this.frames[i] === null) this.enqueue(i);
    }

    const releaseAt = targetFrame - KEEP_BEHIND - 1;
    if (releaseAt >= 0 && this.frames[releaseAt] instanceof Image) {
      this.frames[releaseAt] = "released";
    }

    if (targetFrame < TOTAL_FRAMES - 1 || !this.audio.ended) {
      requestAnimationFrame(() => this._tick());
    }
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (this.lastDrawn >= 0) {
      const f = this.frames[this.lastDrawn];
      if (f instanceof Image) {
        this.ctx.drawImage(f, 0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }
}

(function () {
  const canvas  = document.getElementById("stage");
  const loader  = document.getElementById("loader");
  const percent = document.getElementById("percent");
  const bar     = document.getElementById("bar");
  const playBtn = document.getElementById("play-btn");
  const errorEl = document.getElementById("error");

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener("resize", () => player.resize());

  const audio = new Audio("assets/audio/tea-party.mp3");
  audio.preload = "auto";

  const player = new FramePlayer(canvas, audio);

  player.preload(
    (p) => {
      const pct = Math.round(p * 100);
      percent.textContent = `${pct} %`;
      bar.style.width = `${pct}%`;
    },
    () => {
      
      loader.classList.add("ready");
      percent.textContent = "Prêt";
      playBtn.classList.remove("hide");
    }
  );

  playBtn.addEventListener("click", () => {
    playBtn.classList.add("hide");
    loader.classList.add("hide");
    player.play();
  });

  audio.addEventListener("error", () => {
    errorEl.textContent = "Erreur audio";
    errorEl.classList.remove("hide");
  });
})();
