function tidyNumber(n){
    const arr = String(n).split('').map(x => Number(x))
    
    for(i=0; i < arr.length -1; i++){
      if(arr[i] > arr[i+1]) return false
    }
      return true
}