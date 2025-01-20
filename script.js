let count = 0;
let total = 0;
let counter = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalNmbr = document.getElementById('total-nmbr')

 function increment() {
    count += 1;
    counter.textContent = count;
 }

 function save() {
    let both = count + " - ";
    saveEl.textContent += both;

    total += count;
    totalNmbr.textContent = total;

    count = 0;
    counter.textContent = 0;
 }