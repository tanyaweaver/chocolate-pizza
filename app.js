var input1 = document.getElementsByTagName('one');
var label = document.getElementsByTagName('label');
function handleCheckbox () {
  if (label.classList.contains('line-through')){
    label.classList.remove('line-through');
  }else{
    label.classList.add('line-through');
  }
}
input1.addEventListener('click', handleCheckbox);
