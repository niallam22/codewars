var capitals = function (word) {
    let arr = []
    word.split('').forEach((x,i,a)=>x === x.toUpperCase()?arr.push(i):'')
    return arr
  };