/* 4. Write a program that converts a sentence into title case, where the first letter of each word is capitalized, 
and the rest of the letters are in lowercase.
    For example, "the quick brown fox" should become "The Quick Brown Fox." */
    let a='the quick brown fox';
    a=a.split(' ');
    let x= []
    for(let i=0;i<a.length;i++){
      x.push(a[i].charAt(0).toUpperCase()+a[i].slice(1))
    }
    console.log('using normal for loop = ',x.join(' ')) 
    //
    /* using function */
    
    function flu(str){
      let star=str
      let ustr=[]
      for(let i=0;i<star.length;i++){
        ustr.push(star[i][0].toUpperCase()+star[i].slice(1))
      }
      return [ ustr]
    }console.log('using string mehtod = ',flu(a).join(' '))