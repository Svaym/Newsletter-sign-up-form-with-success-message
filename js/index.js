let modal = document.querySelector('#modal');
let btn = document.querySelector('#myBtn');
let close = document.querySelector('#close');
let inp = document.querySelector('#email');
let error = document.querySelector('#error');
btn.addEventListener(`click`, function(){
  let pattern = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  console.log(inp.value);
  let email = inp.value
  console.log(pattern.test(email))
  if (inp.value == '') {
    return;
  }
  if (pattern.test(email) == true) {
    modal.style.display = "block";
    error.classList.toggle('message')
    inp.classList.toggle('red');
  } else if(pattern.test(email) != true){
    inp.classList.toggle('red');
    error.classList.toggle('message')
  }
  inp.value = '';
})
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
