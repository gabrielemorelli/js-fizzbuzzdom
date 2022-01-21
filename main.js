const containerElement = document.getElementById('container');

/*ciclo da 1 a 100*/
for (let i = 1; i <= 100; i++) {
    console.log("Ciclo: " + i);

    /*verifica se il numero è divisibile per 3*/

    if (i % 3 == 0) {
        /*verifica se il numero divsibile per 3  e anche per  5*/
        if (i % 5 == 0) {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box fizzbuzz'>" + "fizzbuzz" + "</div>"
        }
        /*il numero e divisibile solo per 3*/
        else {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box fizz'>" + "fizz" + "</div>"
        }
    }
  
    else {
          /*verifico che il numero sia divisibile per 5*/
        if (i % 5 == 0) {
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box buzz'>" + "buzz" + "</div>"
        }
        else {
            /*il numero non e divisibile ne per 3 ne per 5*/
            containerElement.innerHTML = containerElement.innerHTML + "<div class='box'>" + i + "</div>"
        }
    }
}















