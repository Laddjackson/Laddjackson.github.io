
function showBoy() {
    console.log("Boy Function");
    title.innerHTML="Boy";
    item1.innerHTML="Trucks";
    item2.innerHTML="Trains";
    item3.innerHTML="Tools";


}

function showGirl() {
    console.log("Girl Function");
    title.innerHTML="Girl";
    item1.innerHTML="Dolls";
    item2.innerHTML="Sparkles";
    item3.innerHTML="Pink";
}

function changeFace() {
    //FOR THURSDAY - HAVE FACE CYCLE THROUGH 4 States
    console.log("Change Face")
    if(btnFace.src == "images/SadFE.png") {
        btnFace.src = "images/SmileFE.png";
    }
    else if(btnFace.src == "images/SmileFE.png") {
        btnFace.src = "images/SleepFE.jpg";
    }
    else if(btnFace.src == "images/SleepFE.jpg") {
        btnFace.src = "images/ColdFE.jpg";
    }
    else if(btnFace.src == "images/ColdFE.jpg") {
        btnFace.src = "images/SadFE.png";
    }
}

let title = document.getElementById("title");
let myHeader = document.getElementById("my-header");
let btnBoy = document.getElementById("btn-boy");
let btnGirl = document.getElementById("btn-girl");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

let btnFace = document.getElementById("faces");
btnBoy.onclick = showBoy;
btnGirl.onclick = showGirl;
btnFace.onclick = changeFace;