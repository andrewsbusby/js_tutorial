//reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("")
}
//Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent); 
}
//Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    //Defines a TranslatedPhrase object.
    function TranslatedPhrase(content, translation) {
        this.content=content;
        this.translation = translation;
    }
    TranslatedPhrase.prototype = new Phrase();
    //Returns content processed for palindrome testing.
    this.processecContent = function processedContent() {
        return this.content.toLowerCase();
    }

//Returns true if the phrase is a palindrome, false otherwise.
this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
    }
}