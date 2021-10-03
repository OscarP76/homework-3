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
    
    if (lowers === false) {
        var lowers = [''];
    }
    
    if (uppers) {
        var uppers = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    }
    
    if (uppers === false) {
        var uppers = [''];
    }
    
    if (specials) {
        var specials = ['!@#$%^&*(){}[]?><'];
    }
    
    if (specials === false) {
        var specials = [''];
    }
    
    var random = numbers + lowers + uppers + specials;
    var password = '';
    
    for (var i = 0; i < passwordLength; i++) {
        var newPassword = random[Math.floor(Math.random() * random.length)];
        password += newPassword;
    }
    
    return password;
    
}
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page









