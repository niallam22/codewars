function sortNums(arr) {
    if (!arr || arr.length === 0) {
      return [];
    }
  
    return arr.sort((a, b) => a - b);
  }