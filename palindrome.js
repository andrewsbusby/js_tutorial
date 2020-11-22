//reverses a string.
function reverse(string) {
    return string.split("").reverse().join("");
}
//Returns true for a palindrome, false otherwise.
function palindrom(string) {
    return string === reverse(string);
}