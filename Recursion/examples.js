// Example 1: Martin and the Dragon. Return true if odd is found, if odd is not found return false. Dragon will only look at first number of list.

const dragonAnswer = (martinList) => {

  if (martinList.length === 0) {
    console.log("NO ODD")
    return false;
  }
  if (martinList[0] % 2 !== 0) {
    console.log("ODD FOUND")
    return true;
  }

  dragonAnswer(martinList.splice(1));
  
}

dragonAnswer([3142, 5914, 6550, 3]);