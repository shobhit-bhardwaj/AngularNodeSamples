var environment = process.env.NODE_ENV || 'development';

var config = {
	development : {
		host: 'DeveloperIP',
		port: 8050,
		prettyHtml: true
	},

	production : {
		host: 'ProductionIP',
		port: 8090,
		prettyHtml: false
	}
}

console.log('Environment - ', environment);
console.log('Config - ', config[environment]);

//	set NODE_ENV = production