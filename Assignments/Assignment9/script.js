let toys = [];

class Toy {
    
    constructor(title, price, ages, rating, pic) {
        this.title = title;
        this.price = price;
        this.ages = ages;
        this.rating = rating;
        this.pic = pic;
    }

    get details() {
        return `<strong>${this.title} <br> Price</strong>: ${this.price} <br> <strong>Age Range</strong>: ${this.ages} <br> <strong>Rating</strong>: ${this.rating}`;
    }

    get toyItem() {
        //create container
        let toyContainer = document.createElement("div");

        //create picture
        let imgElem = document.createElement("img");
        imgElem.src = `images/${this.pic}`;                                                                                        
        imgElem.width = 400;
        imgElem.height = 400;

        let toyOverlay = document.createElement("div");
        let toyOverlayText = document.createElement("div");
        toyOverlayText.innerHTML = this.details;

        toyContainer.classList.add(`container`);
        toyOverlay.classList.add(`overlay`);
        toyOverlayText.classList.add(`text`);


        toyOverlay.append(toyOverlayText);
        toyContainer.append(imgElem);
        toyContainer.append(toyOverlay);
        return toyContainer;
    }
}

//After the DOM has been loaded/After all the HTML elements have been rendered
window.onload = function() {
    toys.push(new Toy("American Girl Doll", "$38.88", "4-7", "4 Stars", "americanGirlDoll.jpg"));
    toys.push(new Toy("Hot Wheels", "$3.99", "3-8", "3 Stars", "hotwheels.jpg"));
    toys.push(new Toy("Legos", "$10.99", "4+", "5 Stars", "legos.jpg"));
    toys.push(new Toy("Rubber Poppers", "$5.99", "3-6", "2 Stars", "rubberPoppers.jpg"));
    toys.push(new Toy("Hoverboard", "$149.99", "12+", "3 Stars", "hoverboard.jpeg"));
    toys.push(new Toy("RC Car", "$17.07", "10-14", "4 Stars", "rcCar.jpg"));
    let ToyDiv = document.createElement("div");

    for(let i in toys){
        let toyRow1 = document.getElementById("toyRow1");
        let toyRow2 = document.getElementById("toyRow2");
        if(i < 3) {
            toyRow1.classList.add(`toy-row1`);
            toys[i].toyItem.classList.add(`toy-item`);
            toyRow1.append(toys[i].toyItem);
        } else if (i >= 3) {
            toyRow2.classList.add(`toy-row`);
            toys[i].toyItem.classList.add(`toy-item`);
            toyRow2.append(toys[i].toyItem);
        }
        ToyDiv.append(toys[i].toyItem);
    }

}