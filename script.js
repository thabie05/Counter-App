let count = 0;
let counter = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

 function increment() {
    count += 1;
    counter.textContent = count;
 }

 function save() {
    let both = count + " - ";
    count = 0;
    counter.textContent = 0;
    saveEl.textContent += both;
 }