/* 2. Write a program that checks if a given string is a palindrome. 
A palindrome is a word, phrase, or sequence of characters that reads the same forwards and 
  backward (ignoring spaces, punctuation, and capitalization). */
let str='"A man, a plan, a canal, Panama!' 
let  clean_str=str.toLowerCase().replace(/[^a-z0-9]/g, '')/* /[^a-z0-9]/g regular expresion*/
let revr_str=clean_str.split('').reverse().join('')
clean_str===revr_str?console.log('the given string is palindrome'):console.log('the given string is not a palindrome')

let arr_str=clean_str.split('')

function Check_PLd(Str){
  Clena_str=Str.toLowerCase().replace(/[^a-z0-9]/g, '');
  Rev_str=Clena_str.split('').reverse().join('')
  return Rev_str===Clena_str
}console.log('palindroem is ',Check_PLd(str))


/* to chekc only single sting  */
let a='121'
function paln(str){
    let first_str=''
    let second_str=''
    for(let i=0;i<str.length;i++){
        first_str +=str[i]
    }
    for(let i=str.length-1;i>=0;i--){
        second_str += str[i]
    }
    if(first_str==second_str){
        return 'is aplindrome'
    }else {
        return 'is not palindrome'
    }
}console.log(paln(a))