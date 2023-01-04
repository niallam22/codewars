function sortByLength (array) {
    //sort array by string length
   return array.sort((str1, str2)=>{
      return str1.length > str2.length ? 1 : -1
    })
  };
  
  //return sorted array with ascending str length
  //p - strings, diff lengths, +0
  //r - array sorted acending
  //e - ["Telescopes", "Glasses", "Eyes", "Monocles"] > ["Eyes", "Glasses", "Monocles", "Telescopes"]
  //p