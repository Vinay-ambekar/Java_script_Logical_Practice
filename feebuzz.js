
for(let i=1;i<=50;i++){
    if((i%3==0) && (i%5==0)){
        console.log('aabb')
    }else if(i%5==0){
        console.log('bb')
    }else if(i%3==0){
        console.log('aa')
    }else{
        console.log(i)
    }
}