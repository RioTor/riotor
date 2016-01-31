/*$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });

     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
    $(document).ready(function() {initMenu();});
*/
Meteor.startup(function() {
  $(window).resize(function() {
    if (window.innerWidth >= 750){
      $("#sidebar-wrapper").css('width','250px');
      }
      //$('#confirm_update_dialog').css('margin-left',window.innerWidth / 2 - 200);
  });


});
/*
$("#panel_button").click(function(){
  $("#sidebar-wrapper").toggle("come-and-go");
  console.log($("#panel_button"));
});
*/
Template.feed.helpers({
    updates: function() {
        return EventUpdates.find({lng: { $exists: true }, lat: { $exists: true }}, {sort: {created_on: -1}});
    }


});



Template.registerHelper("formatDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
});

Template.feed.events({
  'click #panelbutton': function(){
    //console.log("PUSHED");
    //$("#sidebar-wrapper").toggle("come-and-go");
    if($("#sidebar-wrapper").width() < 250){
      $("#sidebar-wrapper").css('width','250px');
    }else{
      $("#sidebar-wrapper").css('width','0px');
    }

  }
});
