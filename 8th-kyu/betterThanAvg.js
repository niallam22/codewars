function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((sum, x)=> sum + x ,0)/classPoints.length
  }