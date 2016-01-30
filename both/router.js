Router.route('/', function () {
  this.render('Riotr', {
    data: function () { /*return Items.findOne({_id: this.params._id});*/ }
  });
});
