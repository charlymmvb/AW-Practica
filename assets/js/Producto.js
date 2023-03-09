function Producir() {
    var num1 = parseInt(document.getElementById('numero1').value); 
    var num2 = parseInt(document.getElementById('numero2').value);

    var resultado = 0;

    for(var i=0;i<Math.abs(num2);i++){
        resultado = resultado + num1;
    }

    if((num1<0 && num2<0) || (num1>0 && num2>0)){
        resultado = Math.abs(resultado)
    }else{
        resultado = 0-Math.abs(resultado);
    }

    document.getElementById('pan').innerHTML = resultado;
}