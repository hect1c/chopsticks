Router.route('/fb/webhook/', { where: 'server' })
    .get(function(){
        var req = this.request;
        var res = this.response;

        if( req.query['hub.verify_token'] === Meteor.settings.facebook.messenger.webook_token) {
            res.end(req.query['hub.challenge']);
        }
        res.end('Error, wrong validation token.');
    })
    .post(function(){
        var req = this.request;
        var res = this.response;

        console.log( req.body.entry[0].messaging );
    });

