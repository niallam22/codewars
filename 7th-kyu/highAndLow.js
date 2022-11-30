function highAndLow(str){

  let arr = str.split(" ")
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return max + " " + min
  
}
