import fs from "fs";
import {subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer} from "soquetic";

<<<<<<< HEAD
subscribePOSTEvent ("login", (data) => {
  return (`Mensaje recibido: ${data.msg}`);

})

startServer ();
=======
subscribePOSTEvent("click", (data) => {
  let data1 = JSON.parse (fs.readFileSync ("data/registro.json", "utf-8"));
});

startServer ();
>>>>>>> 8f3f04cee51aab08b6ea11f12428cd3e61c80d53
