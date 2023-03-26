// Beautiful Days at the Movies


// Our solution algorithm was:

function beautifulDays(i, j, k) {
    let count = 0;
    for (let num = i; num <= j; num++) {
      if (Math.abs(num - reverseNum(num)) % k === 0) {
        count++;
      }
    }
    return count;
  }



