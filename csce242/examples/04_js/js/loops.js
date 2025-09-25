    document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);

    //loop and write the numbers one through 10
    for(let i=0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
};

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";
}

    if(startNum > endNum) {
        error.innerHTML = "* The second number must be bigger than the first";
        return;
    }

    //Loops for event numbre from start to end display the number in paragrpahs
    for(let i=startNum; i <= endNum; i++){
       const p = document.createElement("p");
         p.innerHTML = i;
         resultDiv.append(p);
         p.onclick = () => {
             console.log(`You clicked on ${i}`); //the only place she can do it becuase it is the only time she has access to thiis pargraph. 
         };
    }
    document.getElementById("btn-show-toys").onclick = () => {
        const toyList =document.getElementById("toys-list");
        toyList.innerHTML = "";

        const toys = ["ball", "skipping rope", "doll", "bladesblade", "powerrangers", "ferrari"]
        // for(let i=0; i < toys.length; i++){
        //     const li = document.createElement("li");
        //     li.innerHTML = toys[i];
        //     toyList.append(li);
        // }

        /* Second way to do it */
        toys.forEach((item, i)=>{
            console.log(i + ". " + item); //make sure to add the pluses becuas eyou froget 
            //or 
            const li = document.createElement("li"); //this way easier, it what I should use becuase there is less chance of making an error, and built the constuct to specifically use for array 
            li.innerHTML = item;
            toyList.append(li); //literally used it for this for loop 
        });

    };

        document.getElementById("btn-show-toy-prices").onclick = () => {
            const toys = []; 
            toys["ball"] = 2.99;
            toys["skipping rope"] = 4.99;
            toys["doll"] = 9.99;
            toys["bladesblade"] = 19.99;
            toys["powerrangers"] = 14.99;
            toys["ferrari"] = 29.99;

            const toysDiv = document.getElementById("toy-prices");
            toyDiv.innerHTML = "";

            for( let toy in toys){ //differentiating the code becuase it cna get confusing 
                console.log(toys[toy]);
            }

            // make a new paragraph for each one and it says ball cost $ 2.99  and then a new paragraph each toy
            for( let toy in toys){ //differentiating the code becuase it cna get confusing
                //THIS DISPLAYED THE TOYS AND THE PRICES 
                // console.log(`${toy} cost $${toys[toy]}`);
                // const p = document.createElement("p");
                // p.innerHTML = `${toy} cost $${toys[toy]}`;
                // toysDiv.append(p);
                const p = document.createElement("p");
                p.innerHTML = toy;
                toysDiv.append(p);
            }
            

            //when I click the paragrpah in a div below show the price
            //Like "Ball Sot "

            p.onclick = () =>{
            priceP.innerHTML = "This toy is " + `${toy} cost $${toys[toy]}`
        };
    };


