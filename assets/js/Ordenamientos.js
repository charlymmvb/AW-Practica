function Insercion(){
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

function Seleccion(){
    var cadena = document.getElementById('cadena').value;
    var array = cadena.split(',');
    n = array.length;
    for(var i=0; i<n; i++){
        min = i;
        for(var j=i+1; j<n; j++){
            if(array[min]>array[j]){
                min=j;
            }
        }
        aux = array[min];
        array[min]=array[i];
        array[i]=aux;
    }
    document.getElementById('pan').innerHTML = array;
}

function Burbuja(){
    var cadena = document.getElementById('cadena').value;
    var array = cadena.split(',');
    n = array.length;
    for(var i=0; i<n; i++){
        for(var j=0; j<n-i;j++){
            if(array[j]>array[j+1]){
                aux = array[j];
                array[j]=array[j+1];
                array[j+1] = aux;
            }
        }
    }
    document.getElementById('pan').innerHTML = array;

}