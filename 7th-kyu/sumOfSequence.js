const sequenceSum = (begin, end, step) => {
    let result = 0
    for(i=begin;i<=end;i+=step){
      result += i
    }
    return result
  };