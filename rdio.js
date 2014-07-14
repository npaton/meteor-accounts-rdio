Accounts.oauth.registerService('rdio');

if (Meteor.isClient) {
    Meteor.loginWithRdio = function(options, callback) {
        // support a callback without options
        if (! callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Rdio.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    var publicFields = ['services.rdio.url'];
    var privateFields = _.union(publicFields, ['services.rdio.firstName', 'services.rdio.lastName', 'services.rdio.icon', 'services.rdio.playbackToken',
            'services.rdio.icon250', 'services.rdio.icon500', 'services.rdio.key', 'services.rdio.url', 'services.rdio.libraryVersion']);

    Accounts.addAutopublishFields({
        forLoggedInUser: privateFields,
        forOtherUsers: publicFields
    });
}
