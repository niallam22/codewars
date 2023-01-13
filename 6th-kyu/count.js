function count (string) {  
    let count= {}
    string.split('').forEach(letter =>{
      if(!count[letter]){
        count[letter] = 1
      }else{
        count[letter]++
      }
    })
  
     return count;
  }
    //p string with letters only possibly empty
    //r object with letters and count
    //aba > {'a':2, 'b':1}
    //create obj 
    //split
    // iterate through string
    // conditionally add prop if no val present or add count

    // function count (string) {  
    //     var count = {};
    //     string.split('').forEach(function(s) {
    //        count[s] ? count[s]++ : count[s] = 1;
    //     });
    //     return count;
    //   }