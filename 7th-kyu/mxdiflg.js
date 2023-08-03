function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(x => x.length)
    let l2 = a2.map(x => x.length)
  
    let maxA1 = Math.max(...l1)
    let maxA2 = Math.max(...l2)
    let minA1 = Math.min(...l1)
    let minA2 = Math.min(...l2)
    
    const diff1 = maxA1 - minA2
    const diff2 = maxA2 - minA1
    
    return Math.max(diff1, diff2)
  }