let socket = io();

// Escuchar
socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Perdimos conexión con el servidor');
});

// Enviar info
socket.emit('enviarMensaje', {
  usuario: 'Javier',
  mensaje: 'Saludos'
}, function(resp) {
  console.log('Respuesta server', resp);
});

// Escuchar
socket.on('enviarMensaje', (mensaje) => {
  console.log('Servidor', mensaje);
});
