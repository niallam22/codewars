function nbYear(p0, percent, aug, p) {
    let currentPop = p0
    let years=0
    console.log(p0, percent, aug, p)
    while (currentPop < p){
      currentPop += Math.floor(currentPop * percent/100) + aug 
      years ++
    }
  console.log('years: ' ,years)
  return years
}