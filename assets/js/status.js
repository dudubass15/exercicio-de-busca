const codigo = document.getElementById('codigo');
let codigoTxt;

get();

function get() {
    codigoTxt = sessionStorage.getItem('codigo');
    codigo.innerText = codigoTxt.toUpperCase();
}