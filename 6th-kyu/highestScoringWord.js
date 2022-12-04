function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let words = x.split(' ')
    let scoreArr = []
  
    for (const word of words){
     let score = word.split('').reduce((sum,letter,i) => sum + alphabet.findIndex(abc=>abc===letter)+1,0 )
     scoreArr.push(score)
    }
    let index = scoreArr.findIndex(score => score === Math.max(...scoreArr))
    return words[index]
    }