let expression = document.getElementById('expression'); 
let result = document.getElementById('result');
let buttons = document.querySelectorAll('button'); 
let screenValue = ''; 


for(let item of buttons){  
    item.addEventListener('click', (event) => { 
        let buttonText = event.target.innerText; 

        //  If 'AC' button is clicked, clear the screen value and result and expression display
        
        if (buttonText == 'AC'){ 
            screenValue = '';  
            expression.innerText = '';
            result.innerText = '';
        }

         // If '=' button is clicked, evaluate the screen value and show the result.
        else if (buttonText == '='){ 
            result.innerText = eval(screenValue);
            screenValue = '';  
        }

       // For any other button, add the button text to the screen value and update the expression display.
        else{ 
            screenValue += buttonText;
            expression.innerText = screenValue;
        }
    });
}
