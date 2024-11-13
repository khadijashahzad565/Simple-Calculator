let screen = document.getElementById('screen'); //Gets the element where the result will be shown.
let buttons = document.querySelectorAll('button'); //Gets all the buttons on the page.
let screenValue = ''; //Initializes an empty string to store the calculator input.


// Loops through each button, adds a click event listener, and gets the text of the clicked button.
for(let item of buttons){  
    item.addEventListener('click', (event) => { 
        let buttonText = event.target.innerText;
        console.log(); 


        // If 'AC' button is clicked, it clears the input and display.
        if (buttonText == 'AC'){ 
            screenValue = '';  
            screen.value = '';
        }

        // If '=' button is clicked, it evaluates the expression, shows the result, and clears the input.
        else if (buttonText == '='){ 
            screen.value = eval(screenValue);
            screenValue = '';  
        }

        // For any other button, it adds the text to the input and updates the display.
        else{ 
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
