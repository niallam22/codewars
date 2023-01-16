var maxSequence = function(arr){
    //iterate through array
    //for each number sum all the possibilities for the array eg 4, 4+-1,4+-1+2,...
    //save the max sum for that number
    //return the max saved number
    //optimisations: as iterating if initial number is negative skip it, if empty return 0, if all pos return sum array
     if(arr.length===0)return 0
     if(arr.filter(x=> x>0).length===0) return 0
    let maxResult =[]
    arr.forEach((x,i,a)=>{
      let consequtiveSum = []
      let sum = x
      let index = i
      for(n=index;n<a.length;n++){
        consequtiveSum.push(sum)
        index++
        sum += a[index] 
      }
      console.log(`for the variable x=${x}, this is the consequtive sum ${consequtiveSum}`)
      maxResult.push(Math.max(...consequtiveSum))
    })
    return Math.max(...maxResult)
  }
  
  
  console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]));
  //find the greatest sum of neighboring numbers in an array
  //p [],[1,3,4,0,-1,...]
  //r number
  //6: [4, -1, 2, 1]