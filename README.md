## actionhero_client - Meteor Smart Package

[actionhero_client](https://github.com/evantahler/actionhero_client) packaged for Meteor. This can be used to connect to an ActionHero API server. See the [ActionHero Docs](http://actionherojs.com) for more info.

### How to install?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt add actionhero_client`

### An example of how to use the actionhero_client to connect to your ActionHero API server:

	var ah = new actionhero_client;

	ah.connect({
		host: 127.0.0.1,
		port: 5000
	});

	ah.on("connected", function() {
		ah.action("status", function(err, response, duration){
			console.log("STATUS:");
			console.log(" > uptime: " + response.uptime);
			console.log(" ~ request duration: " + duration + "ms");

			// myGreatAction would be a custom action created on your ActionHero API server
			ah.actionWithParams("myGreatAction", {value: "ActionHero Rocks!"}, function(err, response, duration) {
				console.log("myGreatAction response: " + response.message);

				// Now let's disconnect
				ah.disconnect();
			});
		});
	});