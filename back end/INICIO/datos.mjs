//Importo librería File System:
import fs from "fs";
//
//
function Registro () {

   let data = fs.readFileSync ("usuario.json", "utf-8");
   let guardado = JSON.parse (data);

   let lista = guardado;

   //aca el for:

