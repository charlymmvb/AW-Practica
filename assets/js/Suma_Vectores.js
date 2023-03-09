function Sumar(){
    var n = parseInt(document.getElementById('numero').value);
    var cadena1 = document.getElementById('vectorA').value;
    var cadena2 = document.getElementById('vectorB').value;
    var vectorA = cadena1.split(',');
    var vectorB = cadena2.split(',');
    var vectorC = new Array(n);

    for(var i=0; i<n; i++){
        vectorC[i] = parseInt(vectorA[i]) + parseInt(vectorB[i]);
    }

    document.getElementById('pan').innerHTML = "Vector A: {"+vectorA+"}"
    document.getElementById('panecito').innerHTML = "Vector B: {"+vectorB+"}"
    document.getElementById('panzon').innerHTML = "Vector C (resultado): {"+vectorC+"}"

}