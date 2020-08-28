/*function breakOut(array, changeValue, stopValue){
for (let i = 0; i < array.length; i++) {
  if (array[i] !== stopValue) {
    array[i] = changeValue
  }
  else {
    return(array)
    }
  }
}
*/
function breakOut(array, changeValue, stopValue){
  array.forEach((element, changeValue, stopValue) => if (element !== stopValue) {
    element = changeValue
  }
  else {
    return (element)
  }
    )
}