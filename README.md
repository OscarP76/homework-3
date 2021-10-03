# homework-3
File for my password generator homework assignment

## Languages used:
HTML, CSS and JavaScript

## Preview of the site
![image] (![homework3_snippet](https://user-images.githubusercontent.com/88392799/135743885-9db57b76-25be-4082-bb3b-2848d2fd752e.PNG)
)

## Code Snippet (Javascript)

var generateBtn = document.querySelector('#generate');
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function createPassword() {
    console.log(createPassword);
    
    
    var passwordLength = prompt('Please select a password length between 8 - 128 Characters');
    console.log(prompt) 
    
    if (passwordLength >= 8 && passwordLength <= 128) {
        var numbers = confirm("Include numbers?' 'ok' for yes, 'cancel' for no");
        var lowers = confirm("Include lowercase?' 'ok' for yes, 'cancel' for no");
        var uppers = confirm("Include uppercase?' 'ok' for yes, 'cancel' for no");
        var specials = confirm("Include special characters?' 'ok' for yes, 'cancel' for no");
        
    }
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    
    if (passwordLength < 8 || passwordLength > 128) {
        return enterPassword();
    }
    
    if (numbers) {
        var numbers = ['0123456789'];
    }
    
    if (numbers === false) {
        var numbers = [''];
    }
    
    if (lowers) {
        var lowers = ['abcdefghijklmnopqrstuvwxyz'];
    }
