//Importo librería File System:
import fs from "fs";
//
//
function Registro () {

   let data = JSON.parse (fs.readFileSync ("main.json", "utf-8"));

   let objeto = {
      nombre: "Damian",
      contraseña: "Dami22930",
      dia: "29",
      mes: "Septiembre",
      año: 1973
   }

   data.push(objeto);

   let NuevoJSON = JSON.stringify(data, null, 4);

   fs.writeFileSync("main.json", NuevoJSON, "utf-8");

}

Registro ();
