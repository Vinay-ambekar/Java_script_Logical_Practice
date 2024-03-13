/* using function */
function isPrime(num){
    if(num <=1){
        return false
    }
    if(num===2){
        return true
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log("isPrime",isPrime(25));
let array= [1,2,3,4,5,6,7,8,9,10];
/* using filter and invoking function */
let res = array.filter((val)=>isPrime(val));
console.log("res",res);
/* using for loop for above function */
for(let i=1; i<=100; i++){
    if(isPrime(i)){
        console.log("I",i)
    }
}

/*using only for loop*/
for(let i=1; i<=20; i++){
    let isPrime = false;
    if(i >1){
        isPrime = true;
        
        for(let j=2; j<=Math.sqrt(i); j++){
           
            if(i % j === 0){
              isPrime = false;
              break;
            }
        }
    }
   if(isPrime){
       console.log("i",i)
   } 
}