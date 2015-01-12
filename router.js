Router.route('/', function () {
    this.render('home');
    this.layout('homePageLayout');

});

Router.route('/appointments', function () {
  this.render('appointments');
});

Router.configure({
  layoutTemplate: 'layout'
});