function expandedForm(num) {
    const numArr = String(num).split('')
    let res = ''
    numArr.forEach((x,i)=>{
     if( x !== '0' ) {
       const numZeros = numArr.length - (i + 1)
       const zeros = '0'.repeat(numZeros)
       const expandedNum = x + zeros
       i === 0 ? res += expandedNum : res += ' + ' + expandedNum
     }
    })
    return res
  }
    
  
  
  
  