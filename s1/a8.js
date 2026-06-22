let str = "JavaScript is the language of the web";

let totalChars = str.length;
let words = str.split(" ");
let totalWords = words.length;
let countA = str.split("a").length - 1;

console.log("Total characters:", totalChars);
console.log("Total words:", totalWords);
console.log("Number of a:", countA);
console.log("First word:", words[0]);
console.log("Last word:", words[words.length - 1]);