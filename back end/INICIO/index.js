import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function REGISTRO () {
  let data = JSON.parse (fs.readFileSync ("main.json", "utf-8"));
  let objeto = {
    email: "scarincifrancisco@gmail.com",
    password: "Pepito10"
  }
  data.push (objeto);

  fs.writeFileSync ("main.json")
}