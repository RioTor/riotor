Meteor.startup(function() {

    $('#confirm_update_dialog').css('display', 'none');

    //$(window).resize();
});


Template.new_update_dialog.events({
  'click #confirmText': function(){

    var tag = $("#selectTag").val();;
    var text = $("#inputMessage").val();
    var isPrivate = $("#private").attr('checked');
    var userName = "";
    var uid = "";

    console.log(Meteor.user());
    if(Meteor.userId()){
      userName = Meteor.user().username;
      uid = Meteor.userId();
    } else {
      userName = "anon";
      uid = null;
    }
    Session.set('latest_update',{
    tag: tag,
    text: text,
    isPrivate: isPrivate,
    created_on: new Date(),
    name: userName,
    uid: uid
    });

    console.log(Session.get('latest_update'));
    /*
    EventUpdates.insert({
            tag: tag,
            text: text,
            isPrivate: isPrivate,
            name: userName,
            uid: uid
        }, function(error, result){
          Session.set("newestUpdateID", result);
        });
     */
    $('#new_update_dialog').modal("hide");
    $('#confirm_update_dialog').css('display', 'block');

  }
});
