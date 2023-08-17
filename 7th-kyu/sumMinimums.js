function sumOfMinimums(arr) {
    const minArr = []
    arr.forEach(x=> {
      minArr.push(Math.min(...x))
    })
    const sum = minArr.reduce((res, x) =>{ return res + x}, 0)
    return sum
  }