Template.messages.helpers({
    messages: Messages.find({})
});

Template.footer.events({
    'keypress input': function(event) {
        var inputVal = $('.input-box_text').val();

        if( !!inputVal ){
            var charCode = (typeof event.which == "number") ? event.which : event.keyCode;
            if( charCode == 13) {
                event.stopPropagation();
                Messages.insert({
                    text: $('.input-box_text').val(),
                    user: Meteor.userId(),
                    timestamp: Date.now()
                });
                $('.input-box_text').val("");
                // return false;
            }
        }
    }
});

Template.registerHelper("usernameFromId", function(userId){
    var user = Meteor.users.findOne({ _id: userId });
    if( typeof user === "undefined" ){
        return "Anonymous";
    }

    return user.username;
});

Template.registerHelper("timestampToTime", function(timestamp){
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Meteor.subscribe('messages');
Meteor.subscribe('allUsernames');