function displayEmotion() {

    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    console.log("Your first name is "+firstName);
    console.log("Your favorite color is "+favColor);
    console.log("Your emotion is "+emotion);

    let results = document.getElementById("results");
    let displayEmotion = document.getElementById("ex1-emotion");

    //Clear all errors beofre
    //Validate Data
    const firstError = isNotBlank(firstName, "error-name");
    const secondError = isNotBlank(favColor,"error-fav-color");
    const thirdError = isNotBlank(emotion, "error-emotion");

    results.innerHTML = `Welcome ${firstName}!<br>you are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.add(favColor.toLowerCase());
    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent <-maybe parsens
    */
}

function isNotBlank(data, errorSpam) {
    if(data == "") {
        let errorSpam.document.getElementById
        errorSpam.classList.remove("hidden");
        return true;
    }

    return false;
}

function clearEmojiColor {
    const list = [`red`,`blue`,`green`,`"yellow`];
    displayEmotion.classList.remove();                            
}

function getEmoji(emotion) {
    const emoCI = emotion.toLowerCase();

    if(emoCI == "sad")
    {
        return `:(`;
    }
    else if(emoCI == "happy")
    {
        return ":)";
    }
    else if(emoCI == `silly`)
    {
        return ":P";
    }
    else if(emoCI == `angry`)
    {
        return `>:|`;
    }
    else
    {
        return "ERROR!";
    }
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;