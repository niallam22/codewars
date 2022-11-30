function wallpaper(l, w, h) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    if(!l|| !w )return 'zero'
    let rolls = Math.ceil(1.15*((2*l/0.52) / (10/h)+ (2*w/0.52) / (10/h)))
    return numbers[rolls]
  }