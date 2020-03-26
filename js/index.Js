// Init
let i = 0;

const cases = document.querySelectorAll(".case");

cases.forEach(el => el.addEventListener('click', jouer));

function tour() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}

function jouer() {
    if (!this.innerHTML) this.innerHTML = tour();
    isGagner();
}

function displayWinner() {
    alert(event.target.innerHTML + " win !");
    rejouer();
}



function isGagner() {

    // Vertical
    if (cases[0].innerHTML !== '' &&  cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML || cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML || cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML ) {
        displayWinner();
    } 
    
    // Horizontal
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML || cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML || cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML ) {
        displayWinner() 
    }

    // Diag
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML || cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        displayWinner() 
    }
}


//document.addEventListener("DOMContentLoaded", app.init);