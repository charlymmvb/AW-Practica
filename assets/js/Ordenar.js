function Ordenar(){
    var cadena = document.getElementById('cadena').value;
    var array = cadena.split(',');
    n = array.length;
    var aux = 0
    for(var i=1; i<n; i++){
        j=i;
        while(j>0 && parseInt(array[j])<parseInt(array[j-1])){
            aux = array[j];
            array[j] = array[j-1];
            array[j-1] = aux;
            j = j-1
        } 
    }
    document.getElementById('pan').innerHTML = array;
}