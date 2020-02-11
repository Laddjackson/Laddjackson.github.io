function displayEmotion() {

    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    console.log("Your first name is "+firstName);
    console.log("Your favorite color is "+favColor);
    console.log("Your emotion is "+emotion);
    let results = document.getElementById("results");
    results.innerHTML = `${firstName} your favorite color is ${favColor} and you are ${emotion}`;

    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent <-maybe parsens
    */
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;