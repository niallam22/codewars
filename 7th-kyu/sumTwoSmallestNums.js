function sumTwoSmallestNums(numbers) {  
    let sortedNums = numbers.sort((a, b) => a-b)
    return sortedNums[0] + sortedNums[1]
   }