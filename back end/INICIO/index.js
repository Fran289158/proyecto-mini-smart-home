import fs from "fs";
import {subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer} from "soquetic";

subscribePOSTEvent ("register", (data) => {
  let leer = JSON.parse (fs.readFileSync ("data/registro+login.json", "utf-8"));
  let objeto = {email: data.email, password: data.password};
  leer.push (objeto);
  fs.writeFileSync ("data/registro.json", JSON.stringify (leer), {encoding: "utf-8"});
})

subscribePOSTEvent ("login", (data) => {
  let usuarios = JSON.parse (fs.readFileSync ("data/registro+login.json", "utf-8"));
  let encontrar = usuarios.find(usuarios => usuarios.email === data.email && usuarios.password === data.password);
  if (encontrar) {
    return {
      ok: true
    };
  } else {
    return {
      ok: false
    };
  }
})

startServer ();
