function letterGrader(num) {
  if (90 <= num && 100 >= num) {return 'A';}
  else if (80 <= num && 89 >= num) {return 'B';}
  else if (70 <= num && 79 >= num) {return 'C';}
  else if (60 <= num && 69 >= num) {return 'D';}
  else if (0 <= num && 59 >= num) {return 'F';}
  else {return "Must be a number 0-100";}
}

function averageScore(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function medianScore(arr) {
  // sort arr
  var sorted = arr.sort(function(a, b) {return a - b;});

  if (arr.length % 2 === 0) {
    return (sorted[Math.ceil(sorted.length/2)-1] + sorted[Math.ceil(sorted.length/2)]) / 2;
  } else {
    return sorted[Math.ceil(sorted.length/2)-1];
  }
}

function modeScore(arr) {
  var occuence = {};
  var biggest = 0;
  var ans = 0;

  // add number of occuences to obj
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in occuence) {
      occuence[arr[i]] ++;
    } else {
      occuence[arr[i]] = 1;
    }
  }

  // find greatest value in obj
  for (var k in occuence) {
    if (occuence[k] > biggest) {
      biggest = occuence[k];
      ans = k;
    }
  }
  return +ans;
}

module.exports = {
  letterGrader: letterGrader,
  averageScore: averageScore,
  medianScore: medianScore,
  modeScore: modeScore
};