const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pendings = [];
    this.assigned = [];
  }

  get nextNumber() {
    return this.lastNumber++;
  }

  get lastThirteen() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pendings.push(newTicket);
    return newTicket;
  }

  toAssignTicket(agent, desktop) {
    if (this.pendings.length === 0) {
      return null;
    }

    const nextTicket = this.pendings.shift();

    nextTicket.agent = agent;
    nextTicket.desktop = desktop;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
