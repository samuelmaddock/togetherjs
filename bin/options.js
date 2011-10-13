// ShareJS options
module.exports = {
	// Port to listen on
	port: 8000,

	// Database options
	db: {
		// DB type. Options are 'redis' or 'memory'. 'redis' requires the
		// redis npm package. 'memory' has no dependancies and no options.
		type: 'couchdb',
		hostname: "http://admin:admin@localhost"
	},

	// The server will statically host webclient/ directory at /share/*.
	// (Eg, the web client can be found at /share/share.js).
	// Set staticpath: null to disable.
	staticpath: '/share',

	// REST frontend options. Set rest: null to disable REST frontend.
	rest: {
	},

	// SocketIO frontend options. Set socketio: null to disable socketIO frontend.
	socketio: {
	},

	// Authentication code to test if clients are allowed to perform different actions.
	// See documentation for details.
	//auth: function(client, action) {
	//	action.allow();
	//}
}
