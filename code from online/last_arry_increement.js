function digit(digits){
    let y=[]
    let x=(digits.pop()+1).toString().split('')
    x.forEach(function(val){
        y.push(parseInt(val))
    })
    return digits.concat(y) 
    }
    let arr=[4,3,2,1,203]
    console.log('output one',digit(arr))
    let arr1=[9]
    console.log('output one',digit(arr1))