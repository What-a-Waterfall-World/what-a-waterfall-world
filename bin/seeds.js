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
     location: {
      type: "Point",
      coordinates: [45.8337547, 6.2255572],
    },
    userDetails: "64fa1e0ff69c01f674daf554"
   
},
    {
    name: `Staubbach Falls`,
    imageUrl: "../images/Staubbachfall.webp", //author: ©Jungfraubahn
    postalCode: "3825",
    country: "Switzerland",    
    city: "Lauterbrunnen",
    transportation: "Train",
     location: {
      type: "Point",
      coordinates: [46.5942, 7.9090],
    },
    userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Cascate Nardis`,
    imageUrl: "../images/Cascata-di-Nardis.jpg",
    postalCode: "38086",
    city: "Giustino, Autonomous Province of Trento",
    country: "Italy",
    transportation: "Car",
     location: {
      type: "Point",
      coordinates: [46.3014, 10.9822],
    },
    userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: ` Krimml Waterfall`,
    imageUrl: "../images/Krimmler-Waterfall.jpeg",
    postalCode: "5743",
    city: "Krimml",
    country: "Austria",
    transportation: "Train and Bus",
    location: {
      type: "Point",
      coordinates: [47.2127, 12.1839],
    },
    userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Štrbački buk`,
    imageUrl: "../images/Štrbački-buk.jpeg",
    postalCode: "",
    city: `Orašac`,
    country: `Bosnia and Herzegovina`,
    transportation: "Car",
    location: {
      type: "Point",
      coordinates: [44.656107, 16.00729]
    },
    userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Krka National Park`,
    imageUrl: "../images/Krka-National-Park-Croatia.webp",
    postalCode: "",
    city: `Lozovac`,
    country: `Croatia`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [43.8666055, 15.9699089]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Manafossen Falls`,
    imageUrl: "../images/Manafossen-Falls.jpeg",
    postalCode: "6330",
    city: `Verma`,
    country: `Norway`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [62.44302261788418, 7.895236784353601]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Gavarnie Falls`,
    imageUrl: "../images/Gavarnie-falls.jpeg",
    postalCode: "65120",
    city: `Gavarnie-Gèdre`,
    country: `France`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [42.694320238593306, -0.004579831760847311]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Dettifoss`,
    imageUrl: "../images/Dettifoss.jpeg",
    postalCode: "671",
    city: `n/a`,
    country: `Iceland`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [65.8150262297608, -16.384146840537067]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Rhine Falls`,
    imageUrl: "../images/Rhine-Falls.jpeg",
    postalCode: "8447",
    city: `Laufen-Uhwiesen`,
    country: `Swiss`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [47.67880284572023, 8.615365319748337]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Vøringfossen`,
    imageUrl: "../images/Vøringfosse.jpeg",
    postalCode: "5785",
    city: `Vøringfoss`,
    country: `Norway`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [60.42692107612453, 7.251637463223289]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Gullfoss Falls`,
    imageUrl: "../images/Gullfoss.jpeg",
    postalCode: "846",
    city: `n/a`,
    country: `Iceland`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [64.32716093858001, -20.11991956509619]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Torc Waterfall`,
    imageUrl: "../images/Torc.jpeg",
    postalCode: "",
    city: `Torc, Killarney, Co. Kerry`,
    country: `Ireland`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [52.00236429751708, -9.506418344334463]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Catrigg Force`,
    imageUrl: "../images/Catrigg.jpeg",
    postalCode: "BD24 9PZ",
    city: `Settle`,
    country: `The United Kingdom`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [54.10011645364024, -2.2563030040124596]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Terme di Saturnia`,
    imageUrl: "../images/Terme.jpeg",
    postalCode: "58014",
    city: `Grosseto`,
    country: `Italy`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [42.65849068195972, 11.515391823375833]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
    {
    name: `Sgwd Yr Eira Waterfall`,
    imageUrl: "../images/SgwdYr.jpeg",
    postalCode: "",
    city: `River Hepste`,
    country: `The United Kingdom`,
    transportation: "Bus, Car and Boat",
    location: {
      type: "Point",
      coordinates: [51.77844803093481, -3.553841071125484]
  },
  userDetails: "64fa1e0ff69c01f674daf554"
},
]



mongoose
.connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
    return waterfallModel.deleteMany({}); //Clean database before run
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
