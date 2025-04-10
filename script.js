var word = prompt("What is your name:");

var newWord = word[0].toUpperCase() + word.substring(1).toLowerCase();

alert("Hello! " + newWord);

// word.substring(1).toLowerCase() – So'zning qolgan qismini kichik harflarga aylantiradi.

// word[0].toUpperCase() – So'zning birinchi belgisi kattalashtiriladi.