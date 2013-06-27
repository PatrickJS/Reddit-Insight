_.extend(Backbone.OAuth.configs.Reddit, {
    client_id: 'Qf8j0tLpoHoqRQ',
    // redirect_url: window.location.protocol + '//' + window.location.host + '/auth_redirect',
    redirect_url: 'http://127.0.0.1:3000/auth_redirect/',//' + window.location.host + '/auth_redirect',

    // Called after successful authentication.
    onSuccess: function(params) {

        // Get the user's data from Facebook's graph api.
        $.ajax('https://oauth.reddit.com=' + params.access_token).done(function(data) {
            alert('Howdy, ' + data.name);
        });
    }
});
