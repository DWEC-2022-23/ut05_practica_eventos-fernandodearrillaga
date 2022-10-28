
let screenLog = document.getElementById('screen-log');
let screenLog2 = document.getElementById('screen-log2');
let screenLog3 = document.getElementById('screen-log3');
var amarillo=document.getElementsByClassName("amarillo");
var azul=document.getElementsByClassName("azul");
document.addEventListener('mousemove', logKey);
document.addEventListener('click', clickRaton);
document.addEventListener('keydown', teclado);


function logKey(e) {
  screenLog.innerText = 
    "Navegador [" + e.screenX+ ", " + e.screenY + 
    "]\nPágina [" + e.clientX+ ", " + e.clientY + "]";
    amarillo[0].style.background= "none";
    azul[0].style.background= "none";
}

function clickRaton(e) {
    screenLog2.innerText = 
      "Navegador [" + e.screenX+ ", " + e.screenY + 
      "]\nPágina [" + e.clientX+ ", " + e.clientY + "]";
      
      amarillo[0].style.background= "#FFFFCC";
  }

  function teclado(e){
    
    screenLog3.innerText = "Carácter [" + e.key + "]\n Código "  +e.which;
    azul[0].style.background= "#CCE6FF";
  }