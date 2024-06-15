//Creo una variable "meses" con los meses del año en cada posición.
let meses = [
    'Enero', 'Febrero', 'Marzo', 
    'Abril','Mayo','Junio',
    'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
]

//Pido al usuario que ingrese un número del 1 al 12 y redondeo para evitar números con coma.
mes_elegido = Math.floor(window.prompt('Ingrese un número del 1 al 12'));

//Valido el valor ingresado con un while, pidiendo que re-ingrese un valor, cada vez que lo haga mal.
while(mes_elegido > 12 || mes_elegido <= 0){
    mes_elegido = Math.floor(window.prompt('Valor erroneo. Ingrese un número del 1 al 12'));
}

//Utilizo un Switch para evaluar el valor ingresado por el usuario e imprimo el mes correspondiente.
switch (mes_elegido) {
    case 1:
        document.write(meses[0]);
        break;
    case 2:
        document.write(meses[1]);
        break;
    case 3:
        document.write(meses[2]);
        break;
    case 4:
        document.write(meses[3]);
        break;
    case 5:
        document.write(meses[4]);
        break;
    case 6:
        document.write(meses[5]);
        break;
    case 7:
        document.write(meses[6]);
        break;        
    case 8:
        document.write(meses[7]);
        break;
    case 9:
        document.write(meses[8]);
        break;
    case 10:
        document.write(meses[9]);
        break;
    case 11:
        document.write(meses[10]);
        break;
    case 12:
        document.write(meses[11]);
        break;
    
    default:
    document.write("Algo salió mal")
    break;
}