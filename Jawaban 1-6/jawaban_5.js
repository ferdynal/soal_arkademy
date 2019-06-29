sortFunc = (number) => {
    let newNum = '';
    const oldNum = number.split('0');
    for (let i = 0; i < oldNum.length; i++) {
       newNum += oldNum[i].split('').sort().join('')
    }
    console.log(newNum);
  }
  
  sortFunc('5956560159466056');