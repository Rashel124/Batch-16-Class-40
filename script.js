


// console.log("Show the text on browser!");

document.getElementById('paragraph').innerHTML = "Show the text on browser!"; //<p></p>

let number1 = 34;
let number2 = 40;


let result = number1 + number2;

// console.log(result);


document.getElementById('result').innerHTML = result;


//calculation.............

function sum()

{



    let digit1 = document.getElementById('number1').value; //"5"
    let digit2 = document.getElementById('number2').value; //"5"

    // parseInt(digit1); //9,89,90
    
    let converted1 = parseFloat(digit1); //5
    let converted2 = parseFloat(digit2); //5


    let sum = converted1+converted2;


    // console.log("The result is="+sum);

    document.getElementById('sum').innerHTML = "The result is="+sum;
}


