
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    isHomePage: function () {
      return Router.current().route.getName() === undefined;
    }
  });

  var selectedCategory = new ReactiveVar();
  Template.appointments.helpers({
    serviceCategories: function () {
      return ServiceCategories.find();
    },
    servicesInCategory: function (categoryId) {
      return Services.find({category: categoryId});
    },
    selectedCategory: function () {
      return selectedCategory.get();
    }
  });

  Template.appointments.events({
    "click .service-category": function () {
      console.log(this);
      selectedCategory.set(this._id);
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // nope
  });
}
