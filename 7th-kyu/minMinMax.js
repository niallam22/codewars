function minMinMax(array) {
    let min = Math.min(...array)
    while(array.includes(min)){
      min++
    }
      return [Math.min(...array), min, Math.max(...array)]
    }