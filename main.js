import Phrase, { palindrome } from "abusby-palindrome";

let string = prompt("Please enter a string for palindrome testing:");
let Phrase = new Phrase(string);

if (palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome.`)
}