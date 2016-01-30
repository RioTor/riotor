Router.route('/', function () {
  this.render('home', {
    data: function () { /*return Items.findOne({_id: this.params._id});*/ }
  });
});
Router.route('/events', function () {
  this.render('events', {
    data: function () { /*return Items.findOne({_id: this.params._id});*/ }
  });
});
Router.route('map', function () {
  this.render('Riotr', {
    data: function () { /*return Items.findOne({_id: this.params._id});*/ }
  });
});
