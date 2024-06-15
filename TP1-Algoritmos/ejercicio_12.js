//Creo la Clase Vehículo
class Vehiculo{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    //Creo el método Obtener información para que muestre la información del objeto.
    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`
    }
    
}
//Creo la clase Auto, que hereda marca, modelo,
//anio y el método obtenerInformación de la clase Vehículo
class Automovil extends Vehiculo{
    constructor(marca, modelo, anio, color, precio){
        super(marca, modelo, anio);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion(){
        return super.obtenerInformacion()+` Color: ${this.color}, Precio: ${this.precio}`
    }
}

//Instancio la clase vehículo y la clase auto
let vehiculo = new Vehiculo("Mercedez-Benz", "Sprinter", "2015");
let auto = new Automovil("Renault", "12", "1980", "Gris", "50.000")

//Uso el método para obtener información de cada objeto
console.log(vehiculo.obtenerInformacion());
console.log(auto.obtenerInformacion());