// this is the first function called compute. it contains all the variables for the compute onclick button
// to view the result of the simple interest calculator.


function compute(){ 

var principal = document.getElementById("principal").value
var rate = document.getElementById("increament").value
var years = document.getElementById("years").value
var interest = (principal * years * rate / 100)

// Using a variable called paragraph to form the sentence structure of the result from the calculator

// Used new Date().getFullYear(); to create a date for the year. I also used Number to turn a variable into an integer.

// Used <span class=highlight> ### <span> to create a highlight that has the reference in css to add color to the number 

//values returned from the simple interest calculator 

//Added toFixed(2) to round up the interest into 2 decimals

var paragraph = ('<br>' + '<br>' + 'If you deposit ' + '<span class=highlight>'  + principal  + '</span>' + ',' + '<br>' +  'at an interest rate of ' + 
'<span class=highlight>'  + rate + '%' + '.' + '</span>'  + '<br>' + ' You will receive an amount of ' + '<span class=highlight>'  + interest.toFixed(2) + '</span>' +',' + '<br>'
+  ' in the year '  + ('<span class=highlight>'  + ((years = (new Date().getFullYear() + (Number(document.getElementById("years").value-1)))))) + '</span>')  + '<br>';

// Used a simple variable x to make the principal be only positive numbers and used
// focus to let the alert take the user to input the positive number 
var x = document.getElementById("principal").value

    if( x < 1){
        alert("Enter a positive number")
        
    {
        document.getElementById("principal").focus();
    }
}


// Collecting the result using getElementById

document.getElementById("result").innerHTML = paragraph


}
compute();


// This is the second and last function to show how the range and percentage move together
// Using InnerHTML and value to combine and make the range move with the percentage vallue. 


function showPercentage(){
  percBox.innerHTML = increament.value + '%'

showPercentage();
}    
