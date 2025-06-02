const modal = document.querySelector('.modal');
const masc = document.querySelector('.mascara-end')

function showUp(){
    modal.style.left = '50%'
    masc.style.visibility = 'visible'
}

function showOff(){
    modal.style.left = '-30%'
    masc.style.visibility = 'hidden'
}

