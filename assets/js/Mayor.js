function Comenzar(){
    var cadena = document.getElementById('cadena').value;
    var array = cadena.split(',');
    n = array.length;
    var maxn = 0;
    var maxp = 0;
    for(var j=0;j<n;j++){
        if(parseInt(array[j])>maxn){
            maxn=array[j]
            maxp=j;
        }
    }
    document.getElementById('pan').innerHTML = "El número más grande del arreglo {" + array +"} es "+maxn+" en la posición " + (maxp+1);
}

