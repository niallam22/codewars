function noSpace(x){
    let res = ''
    x.split('').forEach(char => {
    char === ' ' ? '' : res += char
  })
    return res
  }

  // alternative: return x.split(' ').join('')