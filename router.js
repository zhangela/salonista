Router.route('/', function () {
    this.render('home');
    this.layout('homePageLayout');

});

Router.route('/appointments', function () {
  this.render('appointments');
});

Router.route("/manage", function () {
    this.render("manage");
});

Router.configure({
  layoutTemplate: 'layout'
});