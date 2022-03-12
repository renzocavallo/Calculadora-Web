var stringVisor = " "
var stringResultado = " "
var Resultado = 0

document.getElementById("cero").onclick = function agregarCero(){
    stringVisor = stringVisor.concat('0')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("uno").onclick = function agregarUno(){
    stringVisor = stringVisor.concat('1')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("dos").onclick = function agregarDos(){
    stringVisor = stringVisor.concat('2')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("tres").onclick = function agregarTres(){
    stringVisor = stringVisor.concat('3')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("cuatro").onclick = function agregarCuatro(){
    stringVisor = stringVisor.concat('4')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("cinco").onclick = function agregarCinco(){
    stringVisor = stringVisor.concat('5')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("seis").onclick = function agregarSeis(){
    stringVisor = stringVisor.concat('6')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("siete").onclick = function agregarSiete(){
    stringVisor = stringVisor.concat('7')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("ocho").onclick = function agregarOcho(){
    stringVisor = stringVisor.concat('8')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("nueve").onclick = function agregarNueve(){
    stringVisor = stringVisor.concat('9')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("producto").onclick = function agregarProducto(){
    stringVisor = stringVisor.concat('*')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("division").onclick = function agregarDivision(){
    stringVisor = stringVisor.concat('/')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("suma").onclick = function agregarSuma(){
    stringVisor = stringVisor.concat('+')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("resta").onclick = function agregarResta(){
    stringVisor = stringVisor.concat('-')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("coma").onclick = function agregarComa(){
    stringVisor = stringVisor.concat('.')
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("coma").onclick = function agregarComa(){
    stringVisor = stringVisor.concat('.') 
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("igual").onclick = function agregarIgual(){

    var stringNum1 = " "
    var stringOperador = " "
    var stringNum2 = " "
    var cantidadDigitos1 = 0
    for(var i = 0; i < stringVisor.length ;i++){
        if(stringVisor[i] != '*' && stringVisor[i] != '/' &&
         stringVisor[i] != '+' && stringVisor[i] != '-'){
        cantidadDigitos1++
        }else{
            break
        }
    }
    
    stringNum1 = stringVisor.substring(0,cantidadDigitos1)
    stringOperador = stringVisor.charAt(cantidadDigitos1)
    stringNum2 = stringVisor.substring(cantidadDigitos1+1,stringVisor.length)
    stringVisor = stringVisor.concat('=')
    
    switch(stringOperador){
        case '*': Resultado = (parseFloat(stringNum1) * parseFloat(stringNum2)).toFixed(2)
                  break
        case '/': Resultado = (parseFloat(stringNum1) / parseFloat(stringNum2)).toFixed(2)
                  break
        case '+': Resultado = (parseFloat(stringNum1) + parseFloat(stringNum2)).toFixed(2)
                  break
        case '-': Resultado = (parseFloat(stringNum1) - parseFloat(stringNum2)).toFixed(2)
                  break              
    } 

stringVisor = stringVisor.concat(Resultado)

document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("borrarTodo").onclick = function BorrarTodo(){
    stringVisor = " "
    document.getElementById("visor").innerHTML = stringVisor
}

document.getElementById("borrar1").onclick = function Borrar1(){
    stringVisor = stringVisor.substring(0, stringVisor.length - 1);
    document.getElementById("visor").innerHTML = stringVisor
}