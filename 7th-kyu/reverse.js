let reverse = function(array, result=[]) {
    array.forEach(x => result.unshift(x))
    return result
  }