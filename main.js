const containerElement = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    console.log("Ciclo: " + i);


    if (i % 3 == 0) {
        if (i % 5 == 0) {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box fizzbuzz'>" + "fizzbuzz" + "</div>"
        }
        else {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box fizz'>" + "fizz" + "</div>"
        }
    }

    else {
        if (i % 5 == 0) {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box buzz'>" + "buzz" + "</div>"
        }
        else {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box'>" + i + "</div>"
        }
    }
}















