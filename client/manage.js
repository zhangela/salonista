Template.serviceCategories.helpers({
    serviceCategories: function () {
        return ServiceCategories.find();
    }
});

Template.serviceCategories.events({
    "submit .new-category": function (event) {
        ServiceCategories.insert({
            name: event.target.name.value
        });

        event.target.name.value = "";

        return false;
    }
});

Template.serviceLevels.helpers({
    serviceLevels: function () {
        return ServiceLevels.find();
    }
});

Template.serviceLevels.events({
    "submit .new-level": function (event) {
        ServiceLevels.insert({
            name: event.target.name.value
        });

        event.target.name.value = "";

        return false;
    }
});

Template.manageServiceCategory.helpers({
    levels: function () {
        return ServiceLevels.find();
    },
    servicesInCategory: function (categoryId) {
        return Services.find({category: categoryId});
    }
});

Template.manageServiceCategory.events({
    "submit .new-service": function (event) {
        var formData = FormUtils.serializeForm(event.target);

        if (! Match.test(formData, Services.matchPattern)) {
            console.log(formData);
            alert("Invalid form data!");
        }

        Services.insert(formData);

        event.target.name.value = "";

        return false;
    }
});