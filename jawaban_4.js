
hitungPohon = (tinggi, tahun) => {
    let tinggiBaru = 0;
    const semi = tinggi + 1;
    console.log(semi);
    const panas = semi * 3;
    console.log(panas);
    const gugur = panas - 0.15;
    console.log(gugur);
    const dingin = tinggi % 2 == 0 ? gugur / 2 : gugur;
    console.log(dingin);
    tinggiBaru = dingin;
    console.log(tinggiBaru);	
    return tinggiBaru;
  }
  
  hitungPohon(2, 2);