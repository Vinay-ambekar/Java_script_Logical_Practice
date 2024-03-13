/* 1. Write a program that takes a string as input and returns the reverse of the string.
 For example, if the input is "hello," the function should return "olleh." */
 let str='hello';
 console.log('input = ',str)
 console.log('using  only methods output = ',str.split('').reverse().join(''))
let revr_str=''
for(let i=str.length-1;i>=0;i--){
    revr_str += str[i]
}
console.log('using for method = ',revr_str)

/* -----***--------- */
function reverseWords(input) {
    var words = input.split(" ");
    var output = "";
    for (var i = 0; i < words.length; i++) {
        var reversedWord = "";
        for (var j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }
        output += reversedWord + " ";
    }
    return output.trim();
}

var input = "Try programiz pro";
var output = reverseWords(input);
console.log(output); // Output: "yrT zimargorp orp"

/* -----another way to revese string */
let strs = 'hello world';
let rev = '';
let word = '';

for (let i = strs.length - 1; i >= 0; i--) {
  rev += strs[i]
}
let wor=rev.split(' ')
let revwor=[]
for(let j=wor.length-1;j>=0;j--){
    revwor.push(wor[j])
}
console.log(revwor.join(' '))