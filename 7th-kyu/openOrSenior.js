function openOrSenior(data){
    let res = data.map(x => {
      return x[0] > 54 && x[1] > 7 ? 'Senior' : 'Open';
    });
    console.log(res);
    return res;
  }