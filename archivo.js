"use strict";

const archivo = document.getElementById('archivo'); //Con esto capturamos el archivo para leerlo 
archivo.addEventListener("change", (e)=>{ //Con este evento detectamos cuando un input cambia su valor y es disparado
    leerArchivo(archivo.files[0])  //Luego creamos una funcion que nos permite leer el archivo.
});

const leerArchivo = ar => {

const reader = new FileReader();
reader.readAsText(ar);
reader.addEventListener("load", (e)=>{   //Creamos esta funcion para verificar que el archivo este bien cargado y permita leerlo
console.log((e))
}) 
}