function change(element, changeValue, stopValue){
  if (element === stopValue){
    break
  }
  else {
    element = changeValue;
  }
}

function breakOut(array, changeValue, stopValue){
  array.forEach(change)
}
