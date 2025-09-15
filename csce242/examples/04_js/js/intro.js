

// /*

// /*var decade ago, let fixes the problem of the var, const doesn't take that much space as var becuase it is a constant*/
// const sayHello=()=> {  //calls the function of that points to the parameter I think
//     console.log("Hello World");    

// }

// document.getElementById("btn-click-me").onclick = sayHello; //pointing to the button, pointer, saves space


// // const btnClickMe = document.getElementById("btn-click-me"); 
// // //pointing to the button, pointer

// // btnClickMe.onclick = sayHello; 
// // //parenthese make the function get called when it was type we took it away becuase it was geting called right away

 

 document.getElementById("btn-click-me").onclick = (event) =>{ 
    document.getElementById("p-welcome").innerHTML = "Hello World";
    //document.getElementById("btn-click-me").classList.add("clicked"); //why does this work, like what does the button clicked turn black, is clicked not just the name of the thing, 
  event.currentTarget.classList.add("clicked"); //why don't we need the console log anymore , current target is the button that was clicked
 };

 document.getElementById("btn-click-sad").onclick = (event) =>{
   const pFeeling = document.getElementById("p-sad");
  pFeeling.innerHTML = "I am sad";
   pFeeling.classList.add("Sad");
   event.currentTarget.classList.add("clicked");
}


 document.getElementById("btn-click-clear").onclick = (event) =>{
   const pFeeling = document.getElementById("p-clear");
  pFeeling.innerHTML = "I am clear";
   pFeeling.classList.add("Clear");
   event.currentTarget.classList.add("clicked");
}