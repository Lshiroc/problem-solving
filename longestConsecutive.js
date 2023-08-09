let numbs = [5, 5, 3, 1, 5, 3, -63, -63, -63, -63, -63, 0];

function longestConsecutive(numbArr) {
  let i = 0;
  let prevNumb = 0;
  let currNumb = 0;
  let longestSequence = 1;
  let currSequence = 1;
  let mostUsedNumb = 0;

  while(numbArr.length > i) {
    currNumb = numbArr[i];
    if(prevNumb == currNumb) {
      currSequence++;
    } else if(currSequence >= longestSequence) {
      longestSequence = currSequence;
      currSequence = 1;
      mostUsedNumb = prevNumb;
    }
    prevNumb = currNumb;

    if(numbArr[i] == 0) {
      break;
    }
    i++;
  }

  return `Longest sequence ${longestSequence} times ${mostUsedNumb}`;
}


console.log(longestConsecutive(numbs));
