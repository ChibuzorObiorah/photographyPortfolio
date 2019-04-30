
var change = document.getElementsByClassName("change");

function darkmode() {
    document.body.style.background = "black";
    document.getElementById("darken").style.display = "none";
    document.getElementById("lighten").style.display = "block";

    for (i = 0; i < change.length; i++) { 
        change[i].style.color = "white";
      }
}

 
function lightmode() {
    document.body.style.background = "white";
    document.getElementById("lighten").style.display = "none";
    document.getElementById("darken").style.display = "block";
    
    for (i = 0; i < change.length; i++) { 
        change[i].style.color = "black";
      }
}

document.getElementById('lighten').onclick = lightmode;
document.getElementById('darken').onclick = darkmode;
