const { io } =require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');

  client.on('disconnect', ()=> {
    console.log('usuario desconectado');
  });

  // Enviar
  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicacion'
  }, function() {
    console.log('Se disparo el callback');
  });

  // Escuchar cliente
  client.on('enviarMensaje', (data, callback)=> {
   console.log(data);

   // broadcast para emit a todos los usurios
   client.broadcast.emit('enviarMensaje', data)

   /* if (mensaje.usuario) {
     callback({
       resp: 'Todo salió bien!'
     });
   } else {
     callback({
       resp: 'Todo salió mal!'
     });
   }    */
  });
});
