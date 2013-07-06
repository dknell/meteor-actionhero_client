Package.describe({
	summary: "actionhero_client packaged for Meteor."
});

Npm.depends({ 'actionhero_client': '2.0.x' });

Package.on_use(function (api) {
	api.add_files('actionheroclient.js', 'server');
});