async function displayBreweries(){
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let breweriesJSON = await response.json();
    let breweriesSection = document.getElementById("breweries-section");
    
    for(i in breweriesJSON){
        let brewery = breweriesJSON[i];
        breweriesSection.append(setBreweryItem(brewery));
    }
}

function setBreweryItem(brewery){
    let brewerySection = document.createElement("section");
    brewerySection.classList.add("brewery");

    let aElem = document.createElement("a");
    let breweryName = document.createElement("h2");
    breweryName.innerText = brewery.name;
    brewerySection.append(breweryName);

    brewerySection.append(getBreweryInfo(brewery));
    return brewerySection;
}

function getBreweryInfo(brewery){
    let pInfo = document.createElement("p");
    let link = document.createElement("a");
    link.href = brewery.website_url;
    link.innerText = `${brewery.website_url}`;
    pInfo.innerHTML += `${brewery.street}<br> ${brewery.city}, ${brewery.state} - ${brewery.country}<br><br>Phone Number: ${brewery.phone}<br>`;
    pInfo.append(link);
    pInfo.classList.add("info");
    return pInfo;
}

window.onload = function(){
    this.displayBreweries();
}