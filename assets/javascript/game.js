//array to pull celebrity names from
var celebrities = ["Burt Reynolds", "Leonardo Dicaprio", "Oprah", "Vanilla Ice"]
var underscores = [];

//empty lists to pass through 
var rightWord = [];
var wrongWord = [];

//generation of random celebrity
var randomCeleb = Math.floor(Math.random() * celebrities.length);
var chosenCeleb = celebrities[randomCeleb];

console.log(chosenCeleb);

//generate underscores from random chosen celeb
var generateUnderscore = () => {
    //disects the chosen celeb length
    for(var i = 0; i < chosenCeleb.length; i++) {
        //replaces the letters with underscore
        underscores.push('_');
    }
    //stops the function and returns the value
    return underscores;
}

console.log(generateUnderscore());  

//function to capture input from user
document.onkeyup = function (event) {
    //user input converted to unicode
    var keyword = String.fromCharCode(event.keycode);
    if (chosenCeleb.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        console.log(rightWord)
    } else {
        wrongWord.push(keyword);
        console.log(wrongWord);
    }

}

/*-----on page load-----*/
//create an array of choices
//choose a random choice from the array
//create a field of underscores with random choice
//create "number of guesses" counter (2x length) of random choice
//all counters are set to zero

/*-----collect user input-----*/
//collect user input
//if correct, push selection in proper location
//if wrong,  push selection the "wrong guesses"
    //decrease amount of guesses left

