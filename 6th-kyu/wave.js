function wave(str){
    let arr = str.split('')
    let mexicanArr= arr.map((x,i,a)=>x === ' '? '':  str.slice(0,i) + x.toUpperCase() + str.slice(i+1))
    return mexicanArr.filter(n=> n!= '')
  } 