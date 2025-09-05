import { SerialPort } from 'serialport';

let NuevoSerialPort = new SerialPort ({
    path: 'COM3',
    baudRate: 9600,
})

NuevoSerialPort.write ('Hola papi', function (err) {
    if (err) {
        return console.log ('Papi te haces el capo hubo un error');
    }
    console.log ('recibido papi');
})

NuevoSerialPort.on('error', function (err) {
    console.log ('Error: ', err.message);
})