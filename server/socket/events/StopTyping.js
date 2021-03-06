/**
 * Module to handle the socket stop typing event.
 * @module Socket Stop Typing Event Handler
 * @author Justsnoopy30 <justsnoopy30@hypercubemc.tk>
 * @copyright Justsnoopy30 2020
 * @license AGPL-3.0
 */

function handleStopTyping({io, socket}) {
  io.in(socket.server).emit('stop typing', {
    username: socket.username
  });
}

// Export the handleStopTyping function as the default export
export default handleStopTyping;
