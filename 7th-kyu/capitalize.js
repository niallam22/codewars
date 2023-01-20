function capitalize(s){
    //split and iterate
    //conditionally map capitalised letters
    //join and return array
    const evenCap = s.split('').map((x,i) => i % 2 === 0 ? x.toUpperCase() : x).join('')
    const oddCap = s.split('').map((x,i) => i % 2 === 0 ? x : x.toUpperCase()).join('')
    return [evenCap, oddCap]
  };