/* 6. Create logic that performs basic string compression based on the repeat counts of characters.
 For example, the string "aabcccccaaa" would become
"a2b1c5a3." If the compressed string is longer than the original, return the original.
 */
let char='aabccccaaaaa'
function strs(str){
    let comp =''
let count= 1
for(let i=0;i<str.length;i++){
if((i+1)<str.length && str[i]===str[i+1]){
    count++
}else{
    comp += str[i] + count
    count = 1
}
}
return comp
}
console.log(strs(char))

