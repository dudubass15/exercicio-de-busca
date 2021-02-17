const search = document.getElementById('codigo-rastreio');
const btnSend = document.getElementById('btn-send');
const letras = [];

btnSend.setAttribute('disabled', true);

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

function textUpperCase() {}