// class Dog{
//     constructor(title, breed, color, age, size, pic){
//     this.title = title;  //assigns the parameter title to the property title of the object 
//     this.breed = breed; //property will not be set on the Dog object. This means that when you create a new Dog, it will not have a breed property, and trying to access dog.breed will return undefined.
//     this.color = color;
//     this.age = age;
//     this.size = size;
//     this.pic = pic;
//     }
//     get item(){
//         const section = document.createElement("section");
//         section.classList.add("dog");

//         //header
//         const h3 = document.createElement("h3");
//         h3.innerHTML = this.title;
//         section.append(h3);

//         return section;

//         //name and image column
//         const dogCol1 = document.getElementById("dog-col1");
//         const img = document.createElement("img");
//         img.innerHTML = this.pic
//         img.src = `images/${this.pic}`;
//         dogCol1.append(img);

//         //breed and age column
//         const dogCol2 = document.getElementById("dog-col2");
//         const breedP = document.createElement("p");
//         dogCol2.innerHTML = this.breed;
//         breedP.innerHTML = `<strong>Breed:</strong> ${this.breed}`;
//         const ageP = document.createElement("p");
//         ageP.innerHTML = `<strong>Age:</strong> ${this.age} years old`;
//         dogCol2.append(breedP);
//         dogCol2.append(ageP);
// }
// }


// const dogs = [];
// dogs.push(new Dog("Buddy", "Golden Retriever", "Golden", 3, "Large", "yorkie.jpg"));
// dogs.push(new Dog("Max", "German Shepherd", "Black and Tan", 5, "Large", "germanshepherd.jpg")); //pictures don't work becuase I didn't use her pictures
// dogs.push(new Dog("Bella", "Labrador Retriever", "Yellow", 2, "Large", "labrador.jpg"));
// dogs.push(new Dog("Lucy", "Beagle", "Tricolor", 4, "Medium", "beagle.jpg"));

// //on page load
// const dogListDiv = document.getElementById("dog-list");

// dogs.forEach((dog)=>{ //goes through each dog in the array and makes a new hi to sppend to the div
//    dogListDiv.append(dog.item);
// });



class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size; 
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //column container
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        //first Column
        const divCol1 = document.createElement("div");
        columnContainer.append(divCol1);
        divCol1.append(this.picture(this.pic));

        //second Column
        const divCol2 = document.createElement("div");
        columnContainer.append(divCol2);

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }
    
}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "large", "pitt-bull.jpg"));

//on page load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
});