function Comenzar(){
    var n = parseInt(document.getElementById('numero').value);
    var array = new Array(n);
    var maxn = 0;
    var maxp = 0;
    for(var i=0;i<n;i++){
        array[i]=parseInt(prompt("Ingresa un número"));
    }
    for(var j=0;j<n;j++){
        if(array[j]>maxn){
            maxn=array[j]
            maxp=j;
        }
    }
    document.getElementById('pan').innerHTML = "El número más grande del arreglo {" + array +"} es "+maxn+" en la posición " + (maxp+1);
    
}

