let container = document.getElementById('container');


let inc = document.getElementById('inc');
let dec = document.getElementById('dec');

let num = document.getElementById('num');
let integer = 0;

addEventListener('click', function () {
    integer += 0;
    num.innerHTML = integer;

})

inc.addEventListener('click', function () {
    integer += 1;
    num.innerHTML = integer
})
dec.addEventListener('click', function () {
    integer -= 1;
    num.innerHTML = integer
})

