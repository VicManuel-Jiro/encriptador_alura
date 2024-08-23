function encriptar() {
    var input = document.getElementById('input').value;
    var letras = input.split('');
    var resultado = '';

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
}
/*
function desencriptar() {

}
function copiar() {

}*/