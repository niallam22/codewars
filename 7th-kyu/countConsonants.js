function countConsonants(str) {
    const arr = str.toLowerCase().split('')
    console.log(arr)
    const uniqueChars = arr.filter((char,i) => 'bcdfghjklmnpqrstvwxyz'.includes(char) && arr.indexOf(char) === i)
    console.log(uniqueChars)
    return uniqueChars.length
  }
  
  //return number of unique consonants from a string (no vowels)
  //params strings, with spaces and punctuation and capitalised letters and possibly numbers
  //return number
  //e function countConsonants(str){
  // lowercase array filter
  //  conditional statements
  //  return count length
  //
  //}
  //
  //countConsonants(Hello world! hi 12345) --> 5
  //p