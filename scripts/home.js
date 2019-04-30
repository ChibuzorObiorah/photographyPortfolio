
var musthide = document.getElementsByClassName("hide");

function reveal() {
    var elem = document.getElementById("animate");   
    var wid = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (wid == 100) {
        clearInterval(id);
        document.getElementById("not-hidden").style.display = "none";
        for (i = 0; i < musthide.length; i++) { 
            musthide[i].style.display = "block";
          }
      } else {
        wid++; 
        elem.style.width = wid + "%"; 
        // elem.style.height = wid + "%"; 
      }
    }
}

document.getElementById("dive-button").onclick = reveal;

function hide() {
    var elem = document.getElementById("animate");   
    var wid = 100;
    var id = setInterval(frame, 5);
    function frame() {
      if (wid == 0) {
        clearInterval(id);
        document.getElementById("not-hidden").style.display = "block";
        for (i = 0; i < musthide.length; i++) { 
            musthide[i].style.display = "none";
          }
      } else {
        wid--; 
        elem.style.width = wid + "%"; 
      }
    }
}

document.getElementById("goback").onclick = hide;
