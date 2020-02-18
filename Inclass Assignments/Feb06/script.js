function displayEmotion() {

    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    console.log("Your first name is "+firstName);
    console.log("Your favorite color is "+favColor);
    console.log("Your emotion is "+emotion);

    let results = document.getElementById("results");
    results.innerHTML = `Welcome ${firstName}!<br>you are ${emotion} today`;
    let displayEmotion = document.getElementById("emotions");
    displayEmotion.innerHTML = `TEST`;
    if(emotion == "sad")
    {
        displayEmotion.innerHTML = `:(`;
    }
    else if(emotion == "happy")
    {
        displayEmotion.innerHTML = ":)";
    }
    else if(emotion == `silly`)
    {
        displayEmotion.innerHTML = ":P";
    }
    else if(emotion == `angry`)
    {
        displayEmotion.innerHTML = `>:|`;
    }
    else
    {
        displayEmotion.innerHTML = "ERROR!";
    }
    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent <-maybe parsens
    */
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;