const { default: mongoose } = require("mongoose");
const WaterfallModel = require("../models/Waterfall.model");
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/what-a-waterfall-world'


const waterfalls = [
    {
    name: `Cascade d'Angon`,
    image: "../images/Cascade d'Angon.jpeg",
    country: "France",
    city: "Talloires",
    postalCode: "74290",
    transportation: "Bus",
},
    {
    name: `Staubbach Falls`,
    image: "../public/images/Staubbachfall.webp", //author: ©Jungfraubahn

    country: "Switzerland",
    city: "Lauterbrunnen",
    postalCode: "3825",
    transportation: "Train",
},
    {
    name: `Cascate Nardis`,
    image: "../images/Cascata-di-Nardis.jpg",
    country: "Italy",
    city: "Giustino, Autonomous Province of Trento",
    postalCode: "38086",
    transportation: "Car",
},
    {
    name: ` Krimml Waterfall`,
    image: "../images/Krimmler-Waterfall.jpeg",
    country: "Austria",
    city: "Krimml",
    postalCode: "5743",
    transportation: ["Train", "Bus"],
},
    {
    name: `Štrbački buk`,
    image: "../images/Štrbački-buk.jpeg",
    country: `Bosnia and Herzegovina`,
    city: `Orašac`,
    postalCode: "",
    transportation: "Car",
},
    {
    name: `Krka National Park`,
    image: "../images/Krka-National-Park-Croatia.webp",
    country: `Croatia`,
    city: `Lozovac`,
    postalCode: "",
    transportation: ["Bus", "Car", "Boat"]
},
]



mongoose
.connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new waterfalls in the waterfalls collection
    return WaterfallModel.create(waterfalls);
  })
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
