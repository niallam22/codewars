function createPhoneNumber(numbers){
    let strNums = numbers.join('')
    let firstNums = strNums.slice(0,3)
    let secondNums = strNums.slice(3,6)
    let thirdNums = strNums.slice(6,10)
    return `(${firstNums}) ${secondNums}-${thirdNums}`
  }