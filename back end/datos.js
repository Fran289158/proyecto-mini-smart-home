//Importo librerías:
import fs from "fs";
import {SerialPort} from 'serialport';

function LOGIN () {
    let leer = fs.readFileSync ("LOGIN.json", "utf-8");

    let conversion = JSON.parse ("LOGIN.json", null, "\t");

    
    
}