var quoteCounter = 0;
function cycleQuotes() {
    var quotes = [
        "A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance. - Hunter S. Thompson",
        "Unless a man is master of his soul, all other kinds of mastery amount to little. - Theodore Roosevelt",
        "If you want to be happy, be. - Leo Tolstoy",
        "My thoughts disentangle themselves as they pass through my lips and fingertips. - Dawson Trotman",
        "They're always after me Lucky Charms - Lucky the Leprechaun"
    ]
    var quotesElem = document.getElementById("quotes");
    if(quoteCounter < quotes.length) {
        quoteCounter++;
        quotesElem.innerText = quotes[quoteCounter-1];
        setTimeout(cycleQuotes, 2000);
    } else if (quoteCounter == quotes.length) {
        quoteCounter = 0;
        setTimeout(cycleQuotes, 2000);
    }
}

var rainbowCounter = 0;
function drawRainbow() {
    var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    var color = colors[rainbowCounter];
    var rainbow = document.getElementById("div-rainbow");
    if(rainbowCounter < colors.length) {
        rainbowCounter++;
        let bar = document.createElement("p");
        bar.style.backgroundColor = color;
        bar.style.padding = "20px 100px 20px 100px";
        bar.style.margin = "0px";
        bar.style.width = 100;
        console.log("drawing "+color+" bar");
        rainbow.append(bar);
        setTimeout(drawRainbow, 2000);
    } else if (rainbowCounter == colors.length) {
        let potOfGold = document.createElement("IMG");
        potOfGold.src = `images/potOfGold.png`;
        rainbow.append(potOfGold);
    }
}
const quote = document.getElementById("quotes");
window.onload = cycleQuotes;

const btnRainbow = document.getElementById("btn-rainbow");
btnRainbow.onclick = drawRainbow;