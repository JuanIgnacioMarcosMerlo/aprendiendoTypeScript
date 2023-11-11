"use strict";
let mensaje = "hola mundo";
mensaje = "chanchito feliz";
console.log(mensaje);
mensaje = "chao mundo";
let hola = function (e) {
    return e;
};
let arr = [1, "hola", true, 2, 4, "chau"];
let arr2 = [1, 2, 3, 4];
let tupla = [1, "hola"];
let tupla2 = [1, ["hola", "chau"]];
let tupla3 = ["hola", 12, 32, 4, "leon"];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const estado = 2;
const objeto = {
    edad: 30,
    nombre: "juan",
    talla: Talla.Grande
};
const objeto2 = {
    edad: 30,
    nombre: "juan",
    talla: Talla.Grande,
    direccion: {
        numero: 163,
        calle: "Rivadavia",
        pais: "Argentina"
    }
};
const arreglos = [
    {
        edad: 0,
        nombre: "nombre",
        talla: Talla.Chica,
        direccion: {
            numero: 1,
            calle: "calle",
            pais: "argentina"
        },
    },
    {
        edad: 1,
        nombre: "nombre2",
        talla: Talla.ExtraGrande,
        direccion: {
            numero: 2,
            calle: "calle",
            pais: "Argentina"
        }
    }
];
//# sourceMappingURL=index.js.map