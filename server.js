const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const five = require("johnny-five");
const board = new five.Board()

//esto es un cambio de prueba 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  board.on("ready",function(){
    var ledA = new five.Led(13);
    var ledB = new five.Led(12);
    var ledC = new five.Led(11);
    socket.on('ledA', (boolean) => {
      //console.log("se prendio el led A",boolean)
      if(boolean){
        ledA.on();
      }else{     
        ledA.off();
      }
    })
    socket.on('ledB', (boolean) => {
      //console.log("se prendio el led A",boolean)
      if(boolean){
        ledB.on();
      }else{     
        ledB.off();
      }
    })
    socket.on('ledC', (boolean) => {
      //console.log("se prendio el led A",boolean)
      if(boolean){
        ledC.on();
      }else{     
        ledC.off();
      }
    })
  })
});
http.listen(3000, () => {
  console.log('listening on *:3000');
});