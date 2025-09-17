//Importo librería File System:
import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from 'soquetic';

subscribePOSTEvent ("login", (data) => {
  
  try { 
  let Data1 = JSON.parse (fs.readFileSync ("main.json", "utf-8"));
  return (data1);
  }
  catch (error) {
    console.error ("Error:", error);
  }

})

startServer ();