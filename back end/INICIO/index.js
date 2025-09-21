import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

subscribePOSTEvent ("login", (data) => {
  return (`Mensaje recibido: ${data.msg}`);

})

startServer ();