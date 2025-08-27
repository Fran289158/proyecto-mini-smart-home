import fs from "fs";

let cosaAleer = fs.readFileSync ("nombres.json", "utf-8");

let convertirAarray = JSON.parse (cosaAleer);