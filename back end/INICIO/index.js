import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

subscribePOSTEvent ("register", (data) => {
  let leer = JSON.parse (fs.readFileSync ("login + registro.json", "utf-8"));
  let objeto = {email: data.email, password: data.password};
  leer.push (objeto);

  fs.writeFileSync ("login + registro.json", (leer, null, "\n"), {encoding: "utf-8"});
})

subscribePOSTEvent ("login", (data) => {
  let leer = JSON.parse (fs.readFileSync ("login + registro.json", "utf-8"));
  let encontrar = leer.find (leer => data.email === leer.email & data.password === leer.password);

  if (encontrar) {
    return {ok: true};
  }
  else {
    return {ok: false};
  }
})

startServer ();