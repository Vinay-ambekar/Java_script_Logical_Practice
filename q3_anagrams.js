/* 
3. Write a program that takes two strings as input and determines if
they are anagrams of each other. Anagrams are words or phrases formed by rearranging the
letters of another, such as "listen" and "silent."
*/
   let str1='listen'
   let str2='silent'
/* function angram(str01,str02){
let rearange01=str01.split('').sort().join('')
let rearange02=str02.split('').sort().join('')
console.log(rearange01,rearange02)
return rearange01===rearange02
}console.log(angram(str1,str2)) */

/* how to sort using for loop */
/* converting string to array usin for loop */
let arr1=[]
for(let i=0;i<str1.length;i++){
 arr1.push(str1[i]) 
}
//console.log(arr1)//string to array 
/* reversing the array */
for(let i=0;i<arr1.length-1;i++){
  for(let j=0;j<arr1.length-1-i;j++){
    if(arr1[j]>arr1[j+1]){
      var temp=arr1[j];
      arr1[j]=arr1[j+1];
      arr1[j+1]=temp
    }
  }
}
console.log(arr1.join(''))//reverse the array

let arr2=[]
for(let i=0;i<str2.length;i++){
 arr2.push(str2[i]) 
} 
//console.log('converted string2 to array2 ',arr2)//string to array 
/* reversing the array */

 for(let i=0;i<arr2.length-1;i++){
  for(let j=0;j<arr2.length-1-i;j++){
    if(arr2[j]>arr2[j+1]){
      var temp=arr2[j];
      arr2[j]=arr2[j+1];
      arr2[j+1]=temp
    }
  }
}
console.log(arr2.join(''))
if(arr1.join()===arr2.join()){
  console.log('is anagram')
}else{
  console.log('not anagram')
}
 