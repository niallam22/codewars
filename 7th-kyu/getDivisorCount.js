function getDivisorCount(n){
    let result =[]
    const integer = n
    while(n>=0){
      if(integer%n===0)result.push(n)
      n-=1
    }
    return result.length
  }