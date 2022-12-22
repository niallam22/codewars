function getMiddle(s){
    s = s.split('')
    if(s.length % 2 === 0){
      s =  s[s.length/2 - 1] + s[s.length/2] 
    }else{
      s = s[Math.ceil(s.length/2)-1]
    }
    return s
  }