
let botao1 = document.getElementById("b1");
let botao2 = document.getElementById("b2");
let botao3 = document.getElementById("b3");
let botao4 = document.getElementById("b4");
let botao5 = document.getElementById("b5");
let botao6 = document.getElementById("b6");
let botao7 = document.getElementById("b7");
let botao8 = document.getElementById("b8");
let botao9 = document.getElementById("b9");
let botao0 = document.getElementById("b0");
let opsoma = document.getElementById("bso");
let opsub = document.getElementById("bsu");
let opdiv = document.getElementById("bd");
let opmult = document.getElementById("bm");
let bigual = document.getElementById("bi");
let bce = document.getElementById("bc");
let bponto = document.getElementById("bp");

let auxiliar = document.getElementById("auxiliar");
let op = document.getElementById("operador");


botao1.addEventListener("click",function() {numero(this.value); });
botao2.addEventListener("click",function() {numero(this.value); });
botao3.addEventListener("click",function() {numero(this.value); });
botao4.addEventListener("click",function() {numero(this.value); });
botao5.addEventListener("click",function() {numero(this.value); });
botao6.addEventListener("click",function() {numero(this.value); });
botao7.addEventListener("click",function() {numero(this.value); });
botao8.addEventListener("click",function() {numero(this.value); });
botao9.addEventListener("click",function() {numero(this.value); });
botao0.addEventListener("click",function() {numero(this.value); });

opsoma.addEventListener("click", function() {mostrar(this.value);});
opsub.addEventListener("click", function(){mostrar(this.value);});
opdiv.addEventListener("click", function(){mostrar(this.value);});
opmult.addEventListener("click", function(){mostrar(this.value);});
bigual.addEventListener("click", igual);
bce.addEventListener("click", apagar);
bponto.addEventListener("click", ponto);

function numero(valor){
    let aux = document.getElementById("mostrador");
    aux.value += valor  ;
    if (aux.value.indexOf(".") === -1) {
     aux.value = parseFloat(aux.value);   
    }
       
} 
function mostrar(operador){
    if (op.value !== "") {
        igual();
    }
    let mostrar = document.getElementById("mostrador");
    auxiliar.value = mostrar.value;
    mostrar.value = 0;
    op.value = operador;     
}
function igual(){
    let mostrador = document.getElementById("mostrador");
    let operador1 = parseFloat(mostrador.value);
    let operador2 = parseFloat(auxiliar.value);
    let operacao = op.value;
    
    if (operacao === "+") {      
       mostrador.value = operador2+operador1;       
    }
    if (operacao === "-") {
       mostrador.value = operador2-operador1;           
    }
    if (operacao === "x") {
      mostrador.value = operador2*operador1;      
    }
    if (operacao === "/") {
        mostrador.value = operador2/operador1;        
    }
    auxiliar.value = "";
    op.value = "";
}
function apagar(){
    document.getElementById("mostrador").value = "0";
    auxiliar.value = "0";
    op.value = "";
    
}
function ponto(){
    let mostrador = document.getElementById("mostrador");
    mostrador.value = parseFloat(mostrador.value);
    if (mostrador.value.indexOf(".") === -1) {
        mostrador.value+= ".";
    }
}