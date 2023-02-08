function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = alphabet.split('')
    for(i=0; i<alphabet.length; i++){
      if(!string.toLowerCase().includes(alphabet[i])) return false
    }
    return true
  }
  
  // function isPangram(string){
  //   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  //   return alphabet.split('').every(x => string.toLowerCase().includes(x)== 1)
  //   }
  
  //iterate through alphabet
  // check if string contains each letter
  
  