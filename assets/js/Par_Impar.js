function Verificar() {
    var num = document.getElementById('numero').value;
    if(num%2==0){
        document.getElementById('pan').innerHTML = "Par";
    }else{
        document.getElementById('pan').innerHTML = "Impar";
    }
}