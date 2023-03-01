function alternate(n, firstValue, secondValue){
    let arr = []
    for(i=0;i<n; i++){
        i%2 === 0 ? arr.push(firstValue) : arr.push(secondValue)
    }
    return arr
  }

    //create array
    //iterate n times
    //concat values alternating based on index
    //return array