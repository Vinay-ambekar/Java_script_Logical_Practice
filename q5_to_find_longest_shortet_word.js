/* 5. Write a program that finds and returns the longest word in a given sentence. 
You can assume that the sentence consists of words separated by spaces.
 */
let snt = 'consists of words separated by spaces';
let spl_sent = snt.split(' ');
let longestWord = '';
let shortwor=spl_sent[0];
for (let i = 0; i < spl_sent.length; i++) {
    if (spl_sent[i].length > longestWord.length) {
        longestWord = spl_sent[i];
    }
    if(spl_sent[i].length<shortwor.length){
        shortwor=spl_sent[i]
    }
}
console.log('shortest word:',shortwor)
console.log("Longest word:", longestWord);
/* using function  */


function lw(str){
  let arr=snt.split(' ')
  let lnw=''
  let shw=arr[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i].length>lnw.length){
       lnw=arr[i]
  }if(shw.length>arr[i].length){
    shw=arr[i]
  }
       
  }
  return ['longest string is = '+lnw,'shortest string is = '+shw]
}
console.log(lw(snt).join(','))