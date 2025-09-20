import fs from "fs";
import {subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer} from "soquetic";

subscribePOSTEvent("click", (data) => {
  let data1 = JSON.parse (fs.readFileSync ("data/registro.json", "utf-8"));
});

startServer ();