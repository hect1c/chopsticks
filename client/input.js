Template.footer.events({
    'keypress input': function(event) {
        var inputVal = $('.input-box_text').val();

        if( !!inputVal ){
            var charCode = (typeof event.which == "number") ? event.which : event.keyCode;
            if( charCode == 13) {
                event.stopPropagation();
                Meteor.call('newMessage', {
                    text: $('.input-box_text').val(),
                    channel: Session.get('channel')
                });

                $('.input-box_text').val("");
                return false;
            }
        }
    }
});
