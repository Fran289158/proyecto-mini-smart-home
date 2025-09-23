import fs from "fs";
import {subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer} from "soquetic";
import {SerialPort} from "serialport";


//Comunicación Front-Back


subscribePOSTEvent ("register", (data) => {
  let leer = JSON.parse (fs.readFileSync ("data/login + registro.json", "utf-8"));
  let objeto = {email: data.email, password: data.password};
  leer.push (objeto);
  fs.writeFileSync ("data/login + registro.json", JSON.stringify (leer), {encoding: "utf-8"});
  return (`Mensaje recibido: ${data.email + ", " + data.password}`)
})

subscribePOSTEvent ("login", (data) => {
  let leer = JSON.parse (fs.readFileSync ("data/login + registro.json"), "utf-8");
  let encontrar = leer.find (leer => data.email === leer.email & data.password === leer.password);
  if (encontrar) {
    return ({ok: true});
  }
  else {
    return ({ok: false});
  }
})

startServer ();


//Comunicación Back-Hardware:


let port = new SerialPort ({
  path: "COM3",
  baudRate: 9600
})

function readFanState(callback) {
  port.write("READ_FAN\n", (err) => {
    if (err) {
      callback(err, null);
      return;
    }
    port.once("data", (data) => {
      // Assuming the hardware sends "ON" or "OFF"
      const state = data.toString().trim();
      callback(null, state);
    });
  });
}