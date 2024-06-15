//Pido al usuario que ingrese cinco notas, con números naturales.
let notas = []
let estado;
for (let i = 0; i < 5; i++) {
    nota_ingresada = parseInt(window.prompt("Ingrese una nota:"));
    while(nota_ingresada>10 || nota_ingresada <= 0){
        nota_ingresada = parseInt(window.prompt("Debe ingresar un valor positivo, menor o igual a 10. Ingrese una nota:"));
    }
    notas.push(nota_ingresada);
}

//Creo una función para calcular la sumatoria de los elementos del array
function sumatoria(total, num){
    return (total+num)
}
//Uso el método reduce, con la función sumatoria y divido por el largo del array notas, 
//para sacar el promedio.
let promedio = (notas.reduce(sumatoria))/notas.length;

if(promedio<6){
    estado = "Reprobado";
}else if(promedio>5 && promedio <=8){ estado = "Aprobado"}
else{estado = "Sobresaliente"}
//Muestro en pantalla el promedio.
document.write(`<h1>El promedio es ${promedio} y el alumno está <span style="text-decoration:underline">${estado}</span></h1>`)