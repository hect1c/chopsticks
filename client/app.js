Template.messages.helpers({
    messages: Messages.find()
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

Template.listings.helpers({
    channels: function() {
        return Channels.find();
    }
});

Template.channel.helpers({
    active: function(){
        if( Session.get('channel') === this.name ){
            return 'active';
        } else {
            return '';
        }
    }
});

Template.header.helpers({
    currentChannel: function() {
        return Session.get('channel');
    }
});