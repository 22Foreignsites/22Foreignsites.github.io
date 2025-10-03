class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("painting");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href="#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);

        //column container
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        //first Column
        const divCol1 = document.createElement("div");
        columnContainer.append(divCol1);
        divCol1.append(this.picture(this.image));

        //second Column
        // const divCol2 = document.createElement("div");
        // columnContainer.append(divCol2);
        // divCol2.append(this.paragraph("Name", this.name));
        // divCol2.append(this.paragraph("Artist", this.artist));
        // divCol2.append(this.paragraph("Image", this.image));
        // divCol2.append(this.paragraph("Framed", this.framed));
        // divCol2.classList.add("transparent");

        // arrow.onclick = (e) => {
        //     e.preventDefault();     //don't go to destination of link
        //     divCol2.classList.toggle("transparent");
        // };

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = this.image;
        // if (this.framed === "framed") {
        //     img.classList.add("framed-img");
        // }
        return img;
    }

    paragraph(key, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        return p;
    }
    
}



document.getElementById("close-modal").onclick = () => {
    document.getElementById("painting-modal").style.display = "none";
};


const paintings = [];
paintings.push(new Painting("Starry Night", "Van-Gogh", "images/staryNight.jpeg", "framed"));
paintings.push(new Painting("Mona Lisa", "Leonardo da Vinci", "images/monaLisa.webp","unframed"));
paintings.push(new Painting("The Scream", "Edvard Munch", "images/theScream.webp", "framed"));
paintings.push(new Painting("View of Toledo", "El Greco", "images/viewofToledo.webp","unframed"));
paintings.push(new Painting("Breezing Up", "Winslow Homer", "images/breezingUp.webp", "framed"));

const paintingListDiv = document.getElementById("painting-list");

paintings.forEach((painting)=>{
     const item = painting.item;
    item.onclick = () => {
        const modal = document.getElementById("painting-modal");
        const modalContent = document.getElementById("modal-content");
        let imgClass = "";
        if (painting.framed === "framed") {
            imgClass = "framed-img";
        }
        modalContent.innerHTML = `
            <h2>${painting.name}</h2>
            <img src="${painting.image}" class="${imgClass}">
            <p><strong>Artist:</strong> ${painting.artist}</p>
            <p><strong>Framed:</strong> ${painting.framed}</p>
        `;
        modal.style.display = "block";
    };
    paintingListDiv.append(item);
});
//     paintingListDiv.append(painting.item);
// });