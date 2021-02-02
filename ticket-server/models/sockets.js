const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");

      socket.on("new-ticket", (data, callBack) => {
        const newTicket = this.ticketList.createTicket();
        callBack(newTicket);
      });
    });
  }
}

module.exports = Sockets;
