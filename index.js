
var Ekran = document.getElementById('ekran');
  

function Ishla(son) {
    Ekran.value += son
}



function Clear() {
    Ekran.value = ''
}

function Teng() {
    Ekran.value= eval(Ekran.value)
}

function del() {
    Ekran.value=Ekran.value.slice(0, Ekran.value.length-1);
}

