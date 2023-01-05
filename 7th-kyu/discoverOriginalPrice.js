function discoverOriginalPrice(discountedPrice, salePercentage){
    return Math.round(discountedPrice/(100-salePercentage)*10000)/100
  }