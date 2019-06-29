misteri = (lampu, saklar) => {
    let hidup = [];
    for (let i = 0; i < lampu; i++) {
     if (saklar % 2 === 0) {
       if (i % 2 === 0) {
             hidup.push(i);
      }
     } else {
     if (i % 2 === 1) {
             hidup.push(i);
      }
     }
    }
    console.log(hidup)
  }
  
  misteri(15, 3);