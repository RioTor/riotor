Meteor.startup(function() {

    $('#confirm_update_dialog').css('display', 'none');

    //$(window).resize();
});

Meteor.startup(function() {
    Session.set('selected_tag','ion-ios-location');
});

Template.new_update_dialog.events({

'click .update_type_button': function(event){

  var in_target = $(event.target).attr("value");
  if (!in_target){
    in_target = $(event.target).parent().attr("value");
  }
  console.log(in_target);
  Session.set('selected_tag',in_target);


}


,


  'click #confirmText': function(){

    var tag = Session.get('selected_tag');
    //var tag = $("#selectTag").val();
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
