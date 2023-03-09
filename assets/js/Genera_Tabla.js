function Tabla(){
    var num = document.getElementById('numero').value;

    document.getElementById('uno').innerHTML = num;
    document.getElementById('dos').innerHTML = num;
    document.getElementById('tres').innerHTML = num;
    document.getElementById('cuatro').innerHTML = num;
    document.getElementById('cinco').innerHTML = num;
    document.getElementById('seis').innerHTML = num;
    document.getElementById('siete').innerHTML = num;
    document.getElementById('ocho').innerHTML = num;
    document.getElementById('nueve').innerHTML = num;
    document.getElementById('diez').innerHTML = num;

    document.getElementById('runo').innerHTML = num*1;
    document.getElementById('rdos').innerHTML = num*2;
    document.getElementById('rtres').innerHTML = num*3;
    document.getElementById('rcuatro').innerHTML = num*4;
    document.getElementById('rcinco').innerHTML = num*5;
    document.getElementById('rseis').innerHTML = num*6;
    document.getElementById('rsiete').innerHTML = num*7;
    document.getElementById('rocho').innerHTML = num*8;
    document.getElementById('rnueve').innerHTML = num*9;
    document.getElementById('rdiez').innerHTML = num*10;
}