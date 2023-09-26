function sumArray(array) {
    if(!array || array.length <= 2) return 0
    
    const min = Math.min(...array)
    const max = Math.max(...array)
    const sum = array.reduce((accum, x)=> accum += x,0)
  
    return sum - max - min
  }