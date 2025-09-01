//Importo librería File System:
import fs from "fs";

function LOGIN (Dia, Mes, Año, NombreUsuario, Contraseña, Genero) {

   let leer = fs.readFileSync ("clientes.json", "utf-8");

   let conversion = JSON.parse (leer);

   for (let i = 0; i < conversion.length; i++) {
      
   }
}