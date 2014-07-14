Package.describe({
  summary: "Login service for Rdio accounts"
});

Package.on_use(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('rdio', ['client', 'server']);
  api.use('service-configuration', ['server']);

  api.use('http', ['client', 'server']);

  api.add_files('rdio_login_button.css', 'client');

  api.add_files("rdio.js");
});
