window.onload = function(){
	document.getElementById('numero').onmouseover = cambiarColorTexto;
    document.getElementById('numero').onmouseout = quitarColorTexto;
    document.getElementById('numero').ondblclick = triple;
}
function cambiarColorTexto(){           //cambia el color y el fondo del texto cuando el ratón pasa por encima
	this.style.background = "#FF5566";
    this.style.color = "#FFFFFF";
}
function quitarColorTexto(){            //cambia el color y el fondo del texto cuando el ratón sale del div
    this.style.background = "#FFFFFF";
    this.style.color = "#000000";

}
function triple(){                      //multiplica por 3 el número contenido
    this.innerHTML = parseInt(this.innerHTML)*3;
    

}