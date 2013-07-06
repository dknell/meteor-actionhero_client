Package.describe({
	summary: "actionhero_client packaged for Meteor."
});

Npm.depends({ 'actionhero_client': '2.0.0' });

Package.on_use(function (api) {
	api.add_files('actionheroclient.js', 'server');
});