Template.confirm_update_dialog.events({
    'click #confirm_submit': function() {
        var new_data = Session.get('latest_update');
        var tag = new_data.tag;
        var text = new_data.text;
        var isPrivate = new_data.isPrivate;
        var userName = new_data.userName;
        var uid = new_data.uid;

        console.log(" ", tag, " ", text, " ", isPrivate, " ", userName, " ", uid);

        var position = Session.get('latest_position');
        var lat = position.lat;
        var lng = position.lng;

        EventUpdates.insert({
            lat: lat,
            lng: lng,
            tag: tag,
            text: text,
            isPrivate: isPrivate,
            name: userName,
            uid: uid,
            eventID: Session.get("currentEventID")
        }, function(error, result) {
            Session.set("newestUpdateID", result);
        });
        $('#confirm_update_dialog').css('display', 'none');

    }
});
