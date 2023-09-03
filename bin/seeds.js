const { default: mongoose } = require("mongoose");
const waterfallModel = require("../models/Waterfall.model");
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/what-a-waterfall-world'


const waterfalls = [
    {
    name: `Cascade d'Angon`,
    imageUrl: "../images/Cascade d'Angon.jpeg",
    postalCode: "74290",
    city: "Talloires",
    country: "France",
    transportation: "Bus",
},
    {
    name: `Staubbach Falls`,
    imageUrl: "../images/Staubbachfall.webp", //author: ©Jungfraubahn
    postalCode: "3825",
    country: "Switzerland",    
    city: "Lauterbrunnen",
    transportation: "Train",
},
    {
    name: `Cascate Nardis`,
    imageUrl: "../images/Cascata-di-Nardis.jpg",
    postalCode: "38086",
    city: "Giustino, Autonomous Province of Trento",
    country: "Italy",
    transportation: "Car",
},
    {
    name: ` Krimml Waterfall`,
    imageUrl: "../images/Krimmler-Waterfall.jpeg",
    postalCode: "5743",
    city: "Krimml",
    country: "Austria",
    transportation: "Train and Bus",
},
    {
    name: `Štrbački buk`,
    imageUrl: "../images/Štrbački-buk.jpeg",
    postalCode: "",
    city: `Orašac`,
    country: `Bosnia and Herzegovina`,
    transportation: "Car",
},
    {
    name: `Krka National Park`,
    imageUrl: "../images/Krka-National-Park-Croatia.webp",
    postalCode: "",
    city: `Lozovac`,
    country: `Croatia`,
    transportation: "Bus, Car and Boat"
},
]



mongoose
.connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
    return waterfallModel.deleteMany({});
  })
  // Delete all existing data from database for a clean start
    .then((response) => {
      console.log("Deleted all data from database");
      return waterfallModel.create(waterfalls);
    })
    // Create new waterfalls in the waterfalls collection
  .then(waterfallsFromDB => {
    console.log(`Created ${waterfallsFromDB.length} waterfalls`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating waterfalls from the DB: ${err}`);
  });
