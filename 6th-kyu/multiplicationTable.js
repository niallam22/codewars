multiplicationTable = function(size) {
    let res= []
  for(j=0; j<size; j++){
    console.log(res)
    let part= []
    for(i=0; i<size; i++){
      let num = (i+1)*(j+1)
      part.push(num)
    }
    res.push(part)
  }
    return res
  }