function bingo(ticket, win){
    let miniWins = 0
    ticket.forEach((subArr,index) => {
      let charCodes = subArr[0].split('').map(letter => letter = letter.charCodeAt())
      charCodes.includes(subArr[1])? miniWins++ : ''
    })
    return miniWins >= win ? 'Winner!':'Loser!'
  }
  //p
  //r string 
  //e bingoo([['ABC',45],[w],[l]],1) > Winner!

  console.log(bingo([['JHKYVJIH',69], ['YJ',88], ['KJCTH',77], ['JXFZWWU',69], ['BKNNXBNF',79], ['ZI',84], ['HQQJIA',76], ['QJSXJ',82], ['FBHFGEI',70]], 2));