let count = document.getElementById("counter");
let value = 0;
count.style.color = "white"

function DecreaseCounter() {
    value = value - 1;
    // value.toString();
    count.innerHTML = value;
    if (value > 0) {
        count.style.color = "green"
    } else if (value < 0) {
        count.style.color = "yellow"
    } else {
        count.style.color = "white"
    }
}

function IncreseCounter() {
    value = value + 1;
    count.innerHTML = value;
    if (value > 0) {
        count.style.color = "green"
    } else if (value < 0) {
        count.style.color = "yellow"
    } else {
        count.style.color = "white"
    }
}