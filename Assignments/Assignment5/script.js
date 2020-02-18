function oldToYoung() {

    console.log("Ordering from oldest to youngest");
    const firstName = document.getElementById("txt-name-1").value;
    const firstAge = parseInt(document.getElementById("num-age-1").value);
    const secondName = document.getElementById("txt-name-2").value;
    const secondAge = parseInt(document.getElementById("num-age-2").value);
    const thirdName = document.getElementById("txt-name-3").value;
    const thirdAge = parseInt(document.getElementById("num-age-3").value);
    let results = document.getElementById("results");

    //Error Checks
    const NameError1 = CheckNameError(firstName, "error-name-1");
    const AgeError1 = CheckAgeError(firstAge, "error-age-1");
    const NameError2 = CheckNameError(secondName, "error-name-2");
    const AgeError2 = CheckAgeError(secondAge, "error-age-2");
    const NameError3 = CheckNameError(thirdName, "error-name-3");
    const AgeError3 = CheckAgeError(thirdAge, "error-age-3");

    if (NameError1 || NameError2 || NameError3 || AgeError1 || AgeError2 || AgeError3) return;

    function CheckNameError(data, errorSpanId){
        if(data == "") {
            let errorSpan = document.getElementById(errorSpanId);
            errorSpan.classList.remove("hidden");
            return true;
        } 
        else if(isNaN(data) == false) {
            let errorSpan = document.getElementById(errorSpanId);
            errorSpan.classList.remove("hidden");
            return true;
        }
    
        return false;
    }

    function CheckAgeError(data, errorSpanId){
        if(data == "") {
            let errorSpan = document.getElementById(errorSpanId);
            errorSpan.classList.remove("hidden");
            return true;
        }
        else if(isNaN(data)) {
            let errorSpan = document.getElementById(errorSpanId);
            errorSpan.classList.remove("hidden");
            return true;
        }
    
        return false;
    }

    if(firstAge > secondAge && firstAge > thirdAge) {
        if(secondAge > thirdAge) {
            results.innerHTML = `Oldest to Youngest: ${firstName}, ${secondName}, ${thirdName}`;
        }
        else if(thirdAge > secondAge) {
            results.innerHTML = `Oldest to Youngest: ${firstName}, ${thirdName}, ${secondName}`;
        }
    }
    else if(secondAge > firstAge && secondAge > thirdAge) {
        if(firstAge > thirdAge) {
            results.innerHTML = `Oldest to Youngest: ${secondName}, ${firstName}, ${thirdName}`;
        }
        else if (thirdAge > firstAge) {
            results.innerHTML = `Oldest to Youngest:\n ${secondName}, ${thirdName}, ${firstName}`;
        }
    }
    else {
        if(firstAge > secondAge) {
            results.innerHTML = `Oldest to Youngest:\n ${thirdName}, ${firstName}, ${secondName}`;
        }
        else if(secondAge > firstAge) {
            results.innerHTML = `Oldest to Youngest:\n ${thirdName}, ${secondName}, ${firstName}`;
        }
    }
    

}

function switchViewToExercise1() {
    console.log("Switching view to exercise 1");
    var exercise1 = document.getElementById("exercise-1");
    var exercise2 = document.getElementById("exercise-2");

    exercise1.style.display = "block";
    exercise2.style.display = "none";
    
}

function switchViewToExercise2() {
    console.log("Switching views to exercise 2");
    var exercise1 = document.getElementById("exercise-1");
    var exercise2 = document.getElementById("exercise-2");

    exercise1.style.display = "none";
    exercise2.style.display = "block";
}

function adjustBarGraph() {
    const FundsRaised = parseInt(document.getElementById("num-funds-raised").value);
    var barGraph = document.getElementById("bar-graph");
    console.log("adjusting bar graph for"+FundsRaised);

    if(FundsRaised < 2500) {
        barGraph.style.backgroundColor = "White";
    }
    else if(FundsRaised >= 2500 && FundsRaised < 5000) {
        barGraph.classList.add("g2500");
    }
    else if(FundsRaised >= 5000 && FundsRaised < 7500) {
        barGraph.classList.add("g5000");
    }
    else if(FundsRaised >= 7500 && FundsRaised <= 10000) {
        barGraph.classList.add("g7500");
    }
    else if(FundsRaised > 10000) {
        barGraph.classList.add("g10000");
    }


}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

const switchToExercise1 = document.getElementById("link-exercise-1");
const switchToExercise2 = document.getElementById("link-exercise-2");
switchToExercise1.onclick = switchViewToExercise1;
switchToExercise2.onclick = switchViewToExercise2;

const btnCompareAges = document.getElementById("btn-compare-ages");
btnCompareAges.onclick = oldToYoung;

const btnDisplayGraph = document.getElementById("btn-display-donations");
btnDisplayGraph.onclick = adjustBarGraph;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

