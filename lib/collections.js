
ServiceCategories = new Mongo.Collection("service-categories");
ServiceCategories.matchPattern = {
    name: String
};

Services = new Mongo.Collection("services");
Services.matchPattern = {
    name: String,
    category: String, // _id of ServiceCategories document
    priceOfLevel: Object, // keys are level _ids, value is price as a floating point number
    duration: Number // How long does this service take, in hours
};

ServiceLevels = new Mongo.Collection("service-levels");
ServiceLevels.matchPattern = {
    name: String // "New talent"
};

Stylists = new Mongo.Collection("stylists");
Stylists.matchPattern = {
    name: String,
    email: String,
    level: String, // _id of doc in ServiceLevels
    categories: [String] // _ids of ServiceCategories

    // TODO: add availability
};

Appointments = new Mongo.Collection("appointments");
Appointments.matchPattern = {
    stylist: String, // Stylist _id
    services: [String], // Service _ids
    duration: Number,
    startTime: Date,
    totalPrice: Number,
    creationTime: Date,
    cancelled: Match.Optional(Boolean),

    // Contact info for appointment making people
    email: String,
    phone: String
}