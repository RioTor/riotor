Router.route('/', function () {
  this.render('home', {
    data: function () { /*return Items.findOne({_id: this.params._id});*/ }
  });
});
Router.route('/events', function () {
  this.render('events', {
    data: function () { /*return Events.find( { "isPrivate": { $in: [ false ] }) */ } 
  }); 
});

Router.route('/:_id', {
    template: "Riotr",
    data: function(){
        return EventUpdates.find({ eventID: this.params._id });
    }
});