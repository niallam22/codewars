function printerErrors(s) {
    const arr = s.split('')
    const length = arr.length
    let errors = 0
    const range = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    arr.forEach(x=> {
      if(!range.includes(x)) errors ++ 
    })
    return `${errors}/${length}`
    }