const source1 = document.getElementsByClassName("source")[0]
const source2 = document.getElementsByClassName("source-2")[0]
const source3 = document.getElementsByClassName("source-3")[0]
const source4 = document.getElementsByClassName("source-4")[0]

source1.addEventListener("click", source1);
source2.addEventListener("click", source2);
source3.addEventListener("click", source3);
source4.addEventListener("click", source4);

function source1() {
  source1.classList.add("active");
  source2.classList.remove('active')
  source3.classList.remove('active')
  source4.classList.remove('active')
}
function source2() {
  source2.classList.add('active')
  source1.classList.remove("active")
  source3.classList.remove('active')
  source4.classList.remove('active')
}
function source3() {
    source3.classList.add('active')
  source1.classList.remove("active")
  source2.classList.remove('active')
  source4.classList.remove('active')
}
function source4() {
    source4.classList.add('active')
  source1.classList.remove("active");
  source2.classList.remove('active')
  source3.classList.remove('active')
}


// var buttons = $('button');
// buttons.click(function() {
//   buttons.css('background-color', 'snow');
//   $(this).css('background-color', 'pink');
// });