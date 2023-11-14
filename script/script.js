const timerId = setInterval(changeColor, 20);
let red = 255;
let blue = 0;
let green = 0;
let ccolor = "red"

function changeColor() {

    if(ccolor == "lastRed"){
    red = red + Math.floor(Math.random() * -10);
    }
    else if(ccolor == "lastGreen"){
    green = green + Math.floor(Math.random() * -10);
    }
    else if(ccolor == "lastBlue"){
    blue = blue + Math.floor(Math.random() * -10);
    }
    else if(ccolor == "red"){
    red = red + Math.floor(Math.random() * 10);
    }
    else if(ccolor == "green"){
    green = green + Math.floor(Math.random() * 10);
    }
    else if(ccolor == "blue"){
    blue = blue + Math.floor(Math.random() * 10);
    }
    
    if (red >= 255 && ccolor == "red") {
        ccolor = "lastRed"
    }
    else if (blue >= 255 && ccolor == "blue") {
        ccolor = "lastBlue"
    }
    else if (green >= 220 && ccolor == "green") {
        ccolor = "lastGreen"
    }
    else if (green <= 90 && ccolor == "lastGreen") {
        ccolor = "red"
        green = 0
        red = 90
    }
    else if (blue <= 90 && ccolor == "lastBlue") {
        ccolor = "green"
        blue = 0
        green = 90
    }
    else if (red <= 90 && ccolor == "lastRed") {
        ccolor = "blue"
        red = 0
        blue = 90
    }
    
    document.getElementById("h1").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("bio").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("project").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("Undertale").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("Deltarune").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music1").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music2").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music3").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music4").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("music5").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}
