//Declaro las variables "dato" y "resultado".
let dato, resultado;

//Pido al usuario que introduzca su nombre y lo almaceno en "val1".
val1 = window.prompt("Introduce tu nombre", "...");

//Pido al usuario que ingrese su apellido y lo almaceno en "val2".
val2 = window.prompt("Introduce tu apellido", "...");

//Concateno el nombre y apellido del usuario y lo almaceno en la variable "resultado".
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;

//Imprimo en la consola el mensaje completo de la variable "resultado".
document.write(resultado);
