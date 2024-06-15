//Pido al usuario que ingrese una palabra.
let palabra = window.prompt("Escriba una palabra:")
//Convierto todas las letras de la palabra a minúsculas.
palabra = palabra.toLowerCase();
//Creo un array con las vocales para comparar.
let vocales = ['a','e','i','o','u']
//Inicializo en cero un contador para un ciclo while, donde iré guardando la posición de la cada letra.
let contador = 0;
//Recorro la palabra con un while hasta encontrar una vocal.
while(vocales.includes(palabra[contador]) == false){
    contador+=1;
    //Resguardo por si se ingresa una palabra sin vocales
    if(contador == palabra.length+1){
        break
    }
}
//Almaceno primera la vocal en una variable.
let vocal = palabra[contador];
//Imprimo por consola el resultado.
console.log(`La primera vocal en ${palabra} es la letra ${vocal} y está en la posición ${contador}`)