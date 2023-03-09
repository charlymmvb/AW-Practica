function Comenzar(){
    var cadena = document.getElementById('cadena').value
    var array = cadena.split(',');
    n = array.length
    var media = 0
    for(var i=0; i<n; i++){
        media = media + parseInt(array[i]);
    }
    media = media/n;
    document.getElementById('pan').innerHTML = "La media de la sucesión anterior es: " + media;
}