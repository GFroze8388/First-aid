const timerId = setInterval(changeColor, 20);
let red = 255;
let blue = 0;
let green = 0;
let ccolor = "red"
const elements = document.querySelectorAll('.quest');
let rightAnswer = 0;

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
    else if (green >= 210 && ccolor == "green") {
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
    document.getElementById("h2").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("h3").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("h4").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("h5").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("h6").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("h7").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}