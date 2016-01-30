Meteor.startup(function() {
   $(window).resize(function(){
      $('#home_buttons').css('margin-top', window.innerHeight/2);
      //$('#confirm_update_dialog').css('margin-left',window.innerWidth / 2 - 200);
   });

   //$(window).resize();
});
