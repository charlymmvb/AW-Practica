function Comenzar(){
    var cadena = document.getElementById('texto').value;
    var array = cadena.split('');
    n = array.length;
    document.getElementById('pan').innerHTML = n;
    document.getElementById('panzon').innerHTML = cadena.toUpperCase();
    document.getElementById('panzona').innerHTML = cadena.toLowerCase();
}