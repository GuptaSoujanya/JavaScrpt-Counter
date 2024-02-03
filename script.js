let count = document.getElementById("counter");
let value = 0;

function DecreaseCounter() {
    value = value - 1;
    // value.toString();
    count.innerHTML = value;
}

function IncreseCounter() {
    value = value + 1;
    count.innerHTML = value;
}