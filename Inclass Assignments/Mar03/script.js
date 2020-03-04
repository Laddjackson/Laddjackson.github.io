class Dog {
    
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic; 
    }

    get details() {
        return `${this.title} is a ${this.breed}`;
    }

    get list() {
        let dogSection = document.createElement("section");
        dogSection.classList.add("dog");

        //create picture
        let imgElem = document.createElement("img");
        imgElem.src = `images/${this.pic}`;
        imgElem.width = 200;
        imgElem.height = 200;
        dogSection.append(imgElem);

        let infoSection = document.createElement("section");
        dogSection.append(infoSection);


        //create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = this.title;
        infoSection.append(h3Elem);

        //create list
        let ulElem = document.createElement("ul");
        infoSection.append(ulElem);
        let liBreedElem = document.createElement("li");
        liBreedElem.innerText = `Breed: ${this.breed}`;
        ulElem.append(liBreedElem);

        let liColorElem = document.createElement("li");
        liColorElem.innerText = `Color: ${this.color}`;
        ulElem.append(liColorElem);

        let liAgeElem = document.createElement("li");
        liAgeElem.innerText = `Age: ${this.age}`;
        ulElem.append(liAgeElem);

        let liSizeElem = document.createElement("li");
        liSizeElem.innerText = `Size: ${this.size}`;
        ulElem.append(liSizeElem);

        return dogSection;
    }
}

//After the DOM has been loaded/After all the HTML elements have been rendered
window.onload = function() {
    let Tipsy = new Dog("Tipsy", "Yorkie", "brown", 5, "smol", "yorkie.jpg");
    let Fred = new Dog("Fred", "Golden Retreiver", "gold", 2, "medium", "fred.jpg");
    let Gerald = new Dog("Gerald", "St. Bernard", "mixed", 7, "large", "gerald.jpeg" );
    let dogListDiv = document.getElementById("dog-example");
    dogListDiv.append(Tipsy.list);
    dogListDiv.append(Fred.list);
    dogListDiv.append(Gerald.list);

}