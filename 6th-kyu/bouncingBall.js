function bouncingBall(h,  bounce,  window) {
    if(h>0 && bounce > 0 && bounce < 1 && window < h){
      let numBounces = Math.floor((1/Math.log(bounce)) * Math.log(h/window))
      let numTimesViewed = numBounces *2 + 1
      return -numTimesViewed
    }else return -1
  }