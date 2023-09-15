function sumDigits(number) {  
    const arr = String(Math.abs(number)).split('')
    return arr.reduce((sum, x) => sum += Number(x),0)
  }
  