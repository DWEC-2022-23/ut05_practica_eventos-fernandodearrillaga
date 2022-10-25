let screenLog = document.getElementById('screen-log');
let screenLog2 = document.getElementById('screen-log2');
let screenLog3 = document.getElementById('screen-log3');
document.addEventListener('mousemove', logKey);
document.addEventListener('click', clickRaton)

function logKey(e) {
  screenLog.innerText = 
    "Navegador [" + e.screenX+ ", " + e.screenY + 
    "]\nPágina [" + e.clientX+ ", " + e.clientY + "]";
}

function clickRaton(e) {
    screenLog2.innerText = 
      "Navegador [" + e.screenX+ ", " + e.screenY + 
      "]\nPágina [" + e.clientX+ ", " + e.clientY + "]";
  }