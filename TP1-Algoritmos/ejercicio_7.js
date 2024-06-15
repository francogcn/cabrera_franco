//Creo un array con elementos booleanos, enteros y strings.
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
//Inicializo un array "textos" para almacenar los textos del array valores.
let textos = []
//Inicializo un array "numeros" para almacenar numeros del array valores.
let numeros = []

//Identifico cuales valores del array son textos (strings) y cuales son números.
for (const valor of valores) {
    if(typeof valor == "string"){
        textos.push(valor);
    } else if(typeof valor == "number"){
        numeros.push(valor);
    }
};

//Defino dos variables auxiliares.
let mayor = 0;
let mayorPalabra = 0;

//Recorro el array textos para ubicar la palabra con más letras
for (let i = 0; i < textos.length; i++) {

    if(textos[i].length > mayor){
        mayor = textos[i].length;
        mayorPalabra = textos[i];
    }
    
}

//Creo una función de comparación que retorna la diferencia entre el largo de dos cadenas de texto
function ordenarTexto(a,b){
    return a.length - b.length
}
//Ordeno el array de textos usando la función sort y la función de comparación ordenarTextos.
textos.sort(ordenarTexto)

console.log(`La palabra con más letras es "${mayorPalabra}"`)
console.log("Array ordenado:")
console.log(textos)

//Operaciones básicas con los números

console.log(`Los números son ${numeros}
Suma: ${numeros[0]+numeros[1]}
Resta: ${numeros[0]-numeros[1]}
Multiplicación: ${numeros[0]*numeros[1]}
División: ${numeros[0]/numeros[1]}
`)