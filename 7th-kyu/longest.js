function longest(s1, s2) {
    let str = s1 + s2
    str = str.split('').filter((x,i,a) => i === a.indexOf(x)).sort().join('')
    return str
  }