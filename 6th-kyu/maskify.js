function maskify(cc) {
    //slice off end 4 chars
    //concat with repeated # of length -4
    //return
    
    let clearChar = cc.slice(-4)
    let masked = '#'.repeat(cc.length-clearChar.length)+clearChar
    return masked 
    }
    
    //return masked string showing only the last four characters
    //p string of variable length including empty
    //return string with hashed letters for masking and clear letters for last four
    // e 'abcdefghi' -> '#####fghi' || 'abc' > '###' || '' > ''
    
    maskify('abc')