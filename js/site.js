//Create the Controller Function

//Declare a new function that calls the built in getValues function the numbers
function getValue(){

    /* Within the scope-block of the function Create variables that are defined as values contained within the elements possesing the id of the scanned the document*/
    let message = document.getElementById("message").value;
        
    /*Call the displayValues function using the parameter of numbers, which was passed into the function*/
    let revMessage = reverse(message);

    /*Within the else portion  of the statement enter the Sweet Alert*/
    displayMessage(revMessage);        
}



//Create the Business Logic

/*Declare a new function which calls the built in generateNumbers function and possesses the parameters of start and stop*/
function reverse(message){

    //string? array of characters
    let reverseMessage = "";

    //Create a for-loop which declares a variable of i. the variable of i will consist of the previously defined "start" paramenter and as long as "i" is less than the previously defined stop, add 1 to the value. decrementing forloop 
    for (let index = message.length-1; index >= 0; index--) {

        reverseMessage += message[index];

        /*Within the scope of the loop, call the push function, which places the value of variable numbers within an array consisting of value of i,*/
        let currentLetter = message[index];        
    }

    //Return the vaule for numbers
    return reverseMessage;
}


//Create the View Function

/*Declare a function which calls the built in displayNumbers function and possesses the parameter of numbersArray.*/
function displayMessage(revMessage){

    /*Create a variable of results which will be deined as the value contained within the element possesing the Id of "results"*/
    let results = document.getElementById("results");

    //Create a variable of div
    results.classList.add("revMessage");
    //if divisble by both
    results.innerHTML = revMessage;
}