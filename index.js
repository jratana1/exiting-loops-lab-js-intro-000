function change(element, changeValue, stopValue){
  if (element === stopValue){
    break
  }
  else {
    element = changeValue;
    return(element)
  }
}

function breakOut(array, changeValue, stopValue){
  array.forEach(change)
}
