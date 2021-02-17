const search = document.getElementById('codigo-rastreio');
const btnSend = document.getElementById('btn-send');
const letras = [];

btnSend.setAttribute('disabled', true);

if(sessionStorage.length > 0) {
    sessionStorage.clear();
}

search.addEventListener('keypress', (event) => {

    letras.push(event.key);

    if(letras.length > 0) {

        btnSend.removeAttribute('disabled');

    }

});

search.addEventListener('keydown', (event) => {

    if(event.keyCode == 8 && event.key == 'Backspace') {
        
        letras.pop();

        if(letras.length < 1) {
            btnSend.setAttribute('disabled', true);
        }

    }
});

btnSend.addEventListener('click', () => {
    
    if(!search.getAttribute('disablet') && search.value != '') {

        let r = save(search.value);

        if(r == true) {
            window.location.href = "/status.html";
        }

    }else {

        console.log('Botão está desabilitado, você não pode prosseguir ...');

    }

});

function save(value) {
    let params;

    try {    
        sessionStorage.setItem('codigo', value);
        params = true;
    } catch (error) {
        console.log(error);
        params = false;
    }

    return params;
    
}