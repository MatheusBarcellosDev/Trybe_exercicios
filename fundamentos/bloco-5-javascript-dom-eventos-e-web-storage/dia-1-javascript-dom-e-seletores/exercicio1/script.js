let header = document.querySelector("#header-container");
header.style.backgroundColor = "#036B52";
header.style.color = "#FFF";

let emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "#FF9F84"

let h3 = document.querySelectorAll(".emergency-tasks div h3");
for (let i=0; i < h3.length; i++){
    h3[i].style.backgroundColor = "#A500F3";
    h3[i].style.color = "#FFF";
}

let noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.backgroundColor = "#F9DB5E";

let noH3 = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i=0; i < noH3.length; i++){
    noH3[i].style.backgroundColor = "black";
    noH3[i].style.color = "#FFF";
}

let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "#003533"
footer.style.color = "#FFF"



