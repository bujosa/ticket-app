const BandList = require(`./band-list`);

class Sockets {
	constructor(io) {
		this.io = io;

		this.bandList = new BandList();

		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on('connection', (socket) => {
			console.log('Cliente conectado');
			socket.emit('current-bands', this.bandList.getBands());

			socket.on('vote-band', (id) => {
				this.bandList.increaseVotes(id);
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('delete-band', (id) => {
				this.bandList.removeBand(id);
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('change-name-band', (data) => {
				this.bandList.changeName(data.id, data.name);
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('add-band', (name) => {
				this.bandList.addband(name);
				this.io.emit('current-bands', this.bandList.getBands());
			});
		});

		// vote band
	}
}

module.exports = Sockets;
