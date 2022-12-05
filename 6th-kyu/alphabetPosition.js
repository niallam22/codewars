function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let textToNum = []
    text.toLowerCase().split('').forEach(x =>{
      if(alphabet.includes(x)){
        textToNum.push(alphabet.findIndex(letter => letter === x)+1)
      }
    })
    return textToNum.join(' ')
  }