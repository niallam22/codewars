function findShort(s){
    let sortedArr = s.split(' ').sort((a, b)=> a.length - b.length)
    return sortedArr[0].length
  }