window.onload = function(){             //se añade funcionalidad a los botones
	
    document.getElementById('enlace_1').onclick = muestraOculta;
    document.getElementById('enlace_2').onclick = muestraOculta2;
    document.getElementById('enlace_3').onclick = muestraOculta3;
}

function muestraOculta() {              
    if (document.getElementById('contenidos_1').style.display !="none") {       //si los contenidos se muestran, al pulsar el botón se ocultan
        document.getElementById('contenidos_1').style.display ="none";
        document.getElementById('enlace_1').innerHTML = "Mostrar contenidos";
    }else{
        document.getElementById('contenidos_1').style.display ="block";          //si los contenidos están ocultos, al pulsar el botón se muestran
        document.getElementById('enlace_1').innerHTML = "Ocultar contenidos";
    }
    

    
}

function muestraOculta2() {
    if (document.getElementById('contenidos_2').style.display !="none") {
        document.getElementById('contenidos_2').style.display ="none";
        document.getElementById('enlace_2').innerHTML = "Mostrar contenidos";
    }else{
        document.getElementById('contenidos_2').style.display ="block";
        document.getElementById('enlace_2').innerHTML = "Ocultar contenidos";
    }
    

    
}

function muestraOculta3() {
    if (document.getElementById('contenidos_3').style.display !="none") {
        document.getElementById('contenidos_3').style.display ="none";
        document.getElementById('enlace_3').innerHTML = "Mostrar contenidos";
    }else{
        document.getElementById('contenidos_3').style.display ="block";
        document.getElementById('enlace_3').innerHTML = "Ocultar contenidos";
    }
    

    
}