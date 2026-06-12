/*----------------------------------------*\
  21.2.camera - main.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-14 16:46:00
  @Last Modified time: 2021-02-14 17:12:06
\*----------------------------------------*/
import Sequencer from "./Sequencer.js";

let cursorHideTimer;

window.Sequencer = Sequencer;

window.onload = function() {
  document.body.addEventListener("mousemove", (e)=>{
    document.body.style.cursor = "auto";
    clearTimeout(cursorHideTimer);
    cursorHideTimer = setTimeout(()=>{
        document.body.style.cursor = "none";
    }, 1500)
  });
};

