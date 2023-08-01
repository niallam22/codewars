var number = function(array){
    for(i=1; i<=array.length; i++){
      array[i-1] = `${i}: ${array[i-1]}` 
    }
    return array
  }