let mensaje: string = "hola mundo"
mensaje = "chanchito feliz"
console.log(mensaje)
mensaje = "chao mundo"



let hola = function (e: string) {
    return e;
}

let arr = [1,"hola",true,2,4,"chau"]


let arr2: Array<number> = [1,2,3,4]

// arr2.map( x => x.toString)

let tupla: [number,string] = [1,"hola"]

let tupla2: [number,string[]] = [1 , ["hola","chau"]]

let tupla3: (number | string)[] = ["hola",12,32,4,"leon"]

enum Talla {Chica='s',Mediana='m',Grande='l',ExtraGrande='xl'}


const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success


const objeto: {
    readonly edad: number,
    nombre: string,
    talla: Talla
} = {
    edad: 30,
    nombre: "juan",
    talla: Talla.Grande
}



type Direccion = {
        numero: number,
        calle: string,
        pais: string,
}
type Persona = {
    readonly edad: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion, 
}
const objeto2: Persona = {
    edad: 30,
    nombre: "juan",
    talla: Talla.Grande,
    direccion:{
        numero: 163,
        calle: "Rivadavia",
        pais: "Argentina"
    }
}

const arreglos: Persona[] = [
    {
        edad: 0,
        nombre: "nombre",
        talla: Talla.Chica,
        direccion:{
            numero: 1,
            calle: "calle",
            pais: "argentina"
        },
    },
    {
        edad: 1,
        nombre: "nombre2",
        talla: Talla.ExtraGrande,
        direccion:{
            numero: 2,
            calle: "calle",
            pais: "Argentina"
        }

    }

]


