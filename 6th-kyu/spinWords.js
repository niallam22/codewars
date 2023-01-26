// take a string and reverse words with five or more letters and return string
// string with multiple words and spaces
// r string 
// e spinWords('hello my name is Niall') > 'olleh my name is llaiN'

function spinWords(str){
    // str to Array
    // map words with length 5 or more are reversed
    // join and then return string
    let reversedArr = str.split(' ').map(word => word.length >= 5? word.split('').reverse().join(''): word)
    return reversedArr.join(' ')
}