import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

subscribePOSTEvent ("mensaje", (data) => {
  let leerArchivoFRONT = JSON.parse (fs.readFileSync ("front end/inicio de sesion/index.js"));
  data.find ()
})
startServer ();