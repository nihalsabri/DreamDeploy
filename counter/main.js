let count = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');

const maxForm = document.getElementById('max');
let maxValue = 0;

// Update maxValue when the form is submitted
maxForm.addEventListener('submit', (event) => {
    event.preventDefault();
    maxValue = parseInt(document.getElementById('set-max').value);
    document.getElementById('maxvalue').innerText = `Maximum: ${maxValue}`;
});


incrementBtn.addEventListener('click', () => {

    if (count < maxValue) {
        count++;
        counterValue.innerHTML = count;
    } 
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
    count--;
    counterValue.innerHTML = count;
    }
});

resetBtn.addEventListener('click', reset);

function reset() {
    count = 0;
    counterValue.innerHTML = count;
}



