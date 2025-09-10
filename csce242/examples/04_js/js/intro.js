

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

 

 document.getElementById("btn-click-me").onclick = () =>{
    console.log("Hello world");
 };