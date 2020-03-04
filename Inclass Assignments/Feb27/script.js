function ShowToys() {
    let toysResults = document.getElementById("toys-results");

    if(toysResults.innerHTML != "") {
        toysResults.innerHTML = "";
    }
    else {
        var toys = ["Drum", "Ball", "Car", "Bike"];
        toysResults.innerHTML = "";
        let ulElem = document.createElement("ul");
        toysResults.append(ulElem);
        for(let i=0; i < toys.length; i++) {
            console.log(toys[i]);

            let liElem = document.createElement("li");
            if(i % 2){
                liElem.classList.add("highlight-blue");
            }
            liElem.textContent = toys[i];
            ulElem.append(liElem);
        }
    }

}

function toggleToys() {
    let toysResults = document.getElementById("toys-results");
    toysResults.classList.toggle("hidden");
    setInterval(autoToggle, 2000);
    autoToggle();
    
}

let color = "blue";

function autoToggle( )
{
    let toysResults = document.getElementById("toys-results");
    toysResults.classList.toggle("hidden");
    toysResults.style.backgroundColor = color;

    if(color == "blue" && !toysResults.classList.contains("hidden")) {
        color = "tomato";
    } else if (color == "tomato" && !toysResults.classList.contains("hidden")) {
        color = "blue";
    }
}

ShowToys();
const btnShowToys = document.getElementById("btn-show-toys");
btnShowToys.onclick = toggleToys;

