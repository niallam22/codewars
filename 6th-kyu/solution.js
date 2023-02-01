function solution(str){
    let pairedArr = []
    str.split('').forEach((x,i,a) => {
      if(i % 2 === 0 && i === a.length-1){
        pairedArr.push(x+'_')
      }else if(i % 2 === 0){
        pairedArr.push(x+a[i+1])
      } 
    })
    return pairedArr
  }
  console.log(solution('abcdefghi'))
  // function solution2(str){
  //   let pairedArr = []
  //   let second =''
  //   for(i=0 ; i<str.length; i+=2){
  //     second = str[i+1] || '_'
  //     pairedArr.push(str[i]+second)
  //   }
  //   return pairedArr
  // }
  // console.log(solution2('abcdefghi'))
  // string of letters only 
  // return array with paired letters if odd pair with _
  // abcde > ['ab', 'cd','e_']
  // abcdef > ['ab', 'cd','ef']
    //  split string and iterate through skip odd index
    //  if index = last index and that index is even pair with _
    //  else pair letters and push to new array
  
  