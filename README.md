# Objetivo

crear servidor en nodejs conectado a una graficadora controlada con arduino-uno,
el cual recibe peticiones en tiempo real de el/los clientes para controlar la graficadora 

## dependencias

express.js
socket.io 
firmata-party
johnny-five 

## aplicacion

- express: Para armar la configuracion del servidor.
- socket.io: para crear la conexion bidireccional entre el/los clientes y el servidor
- firmata-party: para flashear memoria del arduino conectado, siguiendo el protocolo firmata para poder realizar la comunicacion entre el software y la placa arduino


## Instalacion

instalar [nodejs](https://nodejs.org/es/) 



instalar dependencias del proyecto antes de iniciar

```bash
npm install
```

conectar arduino y flashear memoria con el siguiente comando

```bash
firmata-party uno --debug
```

abrir el IDE de arduino y instalar el ejemplo llamado "StandardFirmata" en la memoria, ubicado en file/examples/firmata/StandardFirmata

luego iniciar el servidor node 

```bash
node server.js
```


