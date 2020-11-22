//reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("")
}
//Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent); 
}
//Exercise to return an email with username and domain
function emailParts(email) {
    return email.toLowerCase().split("@");
}