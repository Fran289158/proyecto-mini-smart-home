//Importo librería File System:
import fs from "fs";
import { SubscribeGETEvent, SubscribePOSTEvent, realTimeEvent, StartServer } from 'soquetic';

//GETEVENT:

//FRONT:

getEvent("pedirHora", (respuesta) => {
    console.log("La hora actual es:", respuesta.hora);
  });

//BACK:
import { subscribeGETEvent, startServer } from "soquetic";

// Escucha peticiones GET con tipo "pedirHora"
subscribeGETEvent("pedirHora", () => {
  const ahora = new Date().toLocaleTimeString();
  return { hora: ahora };
});

//POSTEVENT:

//FRONT:

postEvent("enviarNombre", { nombre: "Juan" }, (respuesta) => {
    console.log(respuesta.saludo);  // Debería decir: "Hola, Juan!"
  });

//BACKEND:

import { subscribePOSTEvent, startServer } from "soquetic";

// Escucha POST con tipo "enviarNombre"
subscribePOSTEvent("enviarNombre", (data) => {
  console.log(`Nombre recibido: ${data.nombre}`);
  return { saludo: `Hola, ${data.nombre}!` };
});

startServer(3000);

//REALTIMEEVENT:

//FRONT:
receive("nuevaTemperatura", (data) => {
    console.log(`Temperatura recibida: ${data.temp}°C`);
  });

  //BACK:
import { realTimeEvent, startServer } from "soquetic";

// Simula evento cada 5 segundos
setInterval(() => {
  const temperatura = Math.floor(Math.random() * 30 + 10);
  realTimeEvent("nuevaTemperatura", { temp: temperatura });
}, 5000);

startServer(3000);
