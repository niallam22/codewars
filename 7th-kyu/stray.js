function stray(numbers) {
    let sameNum= '',targetNum=''
    
    if(numbers[0]===numbers[1]) {
      sameNum = numbers[0]
      }else if(numbers[0]===numbers[2])return numbers[1]
      else if(numbers[1]===numbers[2]) return numbers[0]
    
    for(i=0;i<numbers.length;i++){
        if(numbers[i] != sameNum){
          targetNum = numbers[i]
        } 
      }
    return targetNum
  }