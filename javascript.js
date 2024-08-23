function encriptar() {
    var input = document.getElementById('input').value;
    var letras = input.split('');
    var resultado = '';
    if (letras.length > 0) {
        letras.forEach(function (letra) {
            switch (letra) {
                case 'e':
                    resultado += 'enter';
                    break;
                case 'i':
                    resultado += 'imes';
                    break;
                case 'a':
                    resultado += 'ai';
                    break;
                case 'o':
                    resultado += 'ober';
                    break;
                case 'u':
                    resultado += 'ufat';
                    break;
                default:
                    resultado += letra;
                    break;
            }
        });
        document.getElementById('full').style.display = 'flex';
        document.getElementById('empty').style.display = 'none';
        document.getElementById('output').textContent = resultado;
    } else {
        document.getElementById('full').style.display = 'none';
        document.getElementById('empty').style.display = 'flex';
    }

}
function desencriptar() {
    var input = document.getElementById('input').value;
    if (input.trim() !== '') {
        let desencriptado = input.replace(/enter/g, "e");
        desencriptado = desencriptado.replace(/imes/g, "i");
        desencriptado = desencriptado.replace(/ai/g, "a");
        desencriptado = desencriptado.replace(/ober/g, "o");
        desencriptado = desencriptado.replace(/ufat/g, "u");
        document.getElementById('full').style.display = 'flex';
        document.getElementById('empty').style.display = 'none';
        document.getElementById('output').textContent = desencriptado;
    }

}


function copiar() {
    var texto = document.getElementById('output').innerText;
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
}