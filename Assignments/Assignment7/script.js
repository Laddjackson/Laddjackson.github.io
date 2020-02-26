let marginLeft = 0;

function step() {
    var img = document.getElementById("running-man");
    console.log("Stepping...");

    if (img.src == "file:///Users/laddjackson/Desktop/Client-Server/Laddjackson.github.io/Assignments/Assignment7/images/walking.png") {
        img.width = "50"
        img.src = "images/running.png";
    } else if (img.src == "file:///Users/laddjackson/Desktop/Client-Server/Laddjackson.github.io/Assignments/Assignment7/images/running.png") {
        img.width = "75";
        img.src = "images/walking.png";
    }

    if (img.src == "file:///Users/laddjackson/Desktop/Client-Server/Laddjackson.github.io/Assignments/Assignment7/images/walking.png") {
        marginLeft += 10;
    } else if (img.src == "file:///Users/laddjackson/Desktop/Client-Server/Laddjackson.github.io/Assignments/Assignment7/images/running.png") {
        marginLeft += 20;
    }

    img.style.marginLeft = marginLeft + ".px";
}

function display() {
    console.log("Displaying Donations...");

    let input = parseInt(document.getElementById("num-funds-raised").value);
    input = (input/10000)*100;

    var donationBar = document.getElementById("bar-graph");
    donationBar.style.background = "linear-gradient(0deg, rgba(255,255,0,1) 0%, rgba(255,255,0,1) " +input+"%, rgba(64,64,64,1)" +input+"%, rgba(64,64,64,1) 100%)"
}

const imgRunningMan = document.getElementById("running-man");
imgRunningMan.onclick = step;
const btnDisplay = document.getElementById("btn-display-donations");
btnDisplay.onclick = display;