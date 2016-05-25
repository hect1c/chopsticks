var token = Meteor.settings.facebook.messenger.access_token;


HTTP.post('https://graph.facebook.com/v2.6/me/subscribed_apps?access_token='+token, {}, function( error, response ){
    if( error ){
        console.log( "[Error]"+ error );
    } else {
        console.log( "[Receive msg]"+ response.data );
    }
});

HTTP.post('https://graph.facebook.com/v2.6/me/messages?access_token='+token, {
        data: {
            "recipient": {
                "id": 974250762688421
            },
            "message": {
                "text": "hello, World!"
            }
        }
    }, function( error, response ){
    if( error ){
        console.log( "[Send Message - Error]"+ error );
    } else {
        console.log( "[Send Message]"+ response );
    }
});

// HTTP.get('https://graph.facebook.com/v2.6/me/subscribed_apps?access_token='+token, function( err, res ){
//     if( err ){
//         console.log( err );
//     } else {
//         console.log("[GET]");
//         console.log( res );
//     }
// });

// app.post('/webhook/', function (req, res) {
//   messaging_events = req.body.entry[0].messaging;
//   for (i = 0; i < messaging_events.length; i++) {
//     event = req.body.entry[0].messaging[i];
//     sender = event.sender.id;
//     if (event.message && event.message.text) {
//       text = event.message.text;
//       // Handle a text message from this sender
//     }
//   }
//   res.sendStatus(200);
// });

// Router.route('https://graph.facebook.com/v2.6/me/subscribed_apps?access_token='+token, {where:'server'})
//     .post(function(){
//         var req = this.request;
//         var res = this.response;

//         console.log(req);
//         console.log(res);

//         this.response.end();
//     });