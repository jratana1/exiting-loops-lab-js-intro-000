function breakOut(array, changeValue, stopValue){
  function change(element, changeValue, stopValue){
    if (element === stopValue){
      break
    }
    else {
      element = changeValue;
    }
  }
  array.forEach(change)
}