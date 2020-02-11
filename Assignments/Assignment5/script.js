function calculate() {

    console.log("Calculate");
    let firstName = document.getElementById("txt-first-name").value;
    let lastName = document.getElementById("txt-last-name").value;
    let productName = document.getElementById("product-name").value;
    var productCount = parseInt(document.getElementById("product-count").value);
    var productPrice = parseFloat(document.getElementById("product-price").value);
    var results = document.getElementById("results");
    var total = document.getElementById("total");

    var totalPrice = (productCount * productPrice) + ((productCount * productPrice)*.07);

    results.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)`;
    total.innerHTML = `Totalling: $${totalPrice}`;

}

let btnCalculate = document.getElementById("calculate");
btnCalculate.onclick = calculate;