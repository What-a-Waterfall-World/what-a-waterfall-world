const router = require("express").Router();
const Waterfall = require("../models/Waterfall.model");
// ********* require fileUploader in order to use it *********
const imageUploader = require("../config/cloudinary.config");

// GET: see all waterfalls and filter waterfalls for dropdown menu
router.get("/waterfalls", (req, res, next) => {
  const { country } = req.query;
  let filter = {};

  if (country) {
    filter.country = country;
  }

  Waterfall.find(filter)
    .then((allWaterfalls) => {
      return Waterfall.distinct("country") // distinct = get all unique values in a array (this is a Mongoose function)
      .then((countries) => {
        res.render("waterfalls/waterfalls-list", {
          waterfalls: allWaterfalls,
          countries,
          country,
        });
      });
    })
    .catch((e) => {
      console.log("Error getting waterfalls data from DB", e);
      next(e);
    });
});

// GET: display form to create new waterfall
router.get("/waterfall/create", (req, res, next) => {
  Waterfall.find()
    .then((allWaterfalls) =>
      res.render("waterfalls/waterfall-create", { waterfalls: allWaterfalls })
    )
    .catch((e) => {
      console.log("Error getting waterfalls data from DB", e);
      next(e);
    });
});

// POST: process form to create new waterfall
router.post(
  "/waterfall/create",
  imageUploader.single("waterfall-image"),
  (req, res, next) => {
    //imageUploader.single() is the middleware function we need to upload the picture. Name 'waterfall-image' is same name as in waterfall-create.hbs file
    const { name, postalCode, country, city, transportation } = req.body;

    Waterfall.create({
      name,
      postalCode,
      country,
      city,
      transportation,
      imageUrl: req.file.path,
    })
      .then((newWaterfall) => {
        res.redirect("/waterfalls");
      })
      .catch((e) => {
        console.log("error adding new watefall to DB", e);
        next(e);
      });
  }
);

// GET: display form to edit an existing waterfall
router.get("/waterfall/:waterfallId/edit", async (req, res, next) => {
  const { waterfallId } = req.params;
  console.log(waterfallId);

  try {
    const waterfallDetails = await Waterfall.findById(waterfallId);

    res.render("waterfalls/waterfall-edit", { waterfall: waterfallDetails });
  } catch (e) {
    console.log("error updating waterfall", e);
    next(e);
  }
});

// POST: process edited waterfall data & redirect to updated details page
router.post(
  "/waterfall/:waterfallId/edit",
  imageUploader.single("waterfall-image"),
  async (req, res, next) => {
    const { waterfallId } = req.params;
    const { name, postalCode, country, city, transportation, existingImage } =
      req.body;
    console.log("CHECK THIS", req.file);

    let imageUrl;
    if (req.file) {
      // Check if there is a new file uploaded in the edit section. If not: keep existing picture.
      imageUrl = req.file.path;
    } else {
      imageUrl = existingImage;
    }

    Waterfall.findByIdAndUpdate(
      waterfallId,
      { name, postalCode, country, city, transportation, imageUrl },
      { runValidators: true }, // when creating something mongoose will check the validators if something is required or not, but by updating it does not pass the model again. When you set this to runValidators: true, it actually will pass the validators again to be sure all the fields are correctyl edited.
      { new: true }
    )
      .then((updatedWaterfall) =>
        res.redirect(`/waterfall/${updatedWaterfall.id}`)
      )
      .catch((e) => {
        console.log("error updating waterfall", e);
        next(e);
      });
  }
);

// POST: delete waterfall
router.post("/waterfall/:waterfallId/delete", (req, res, next) => {
  const { waterfallId } = req.params;

  Waterfall.findByIdAndDelete(waterfallId)
    .then(() => res.redirect("/waterfalls"))
    .catch((e) => {
      console.log("error deleting waterfall", e);
      next(e);
    });
});

// GET: display details of a waterfall
router.get("/waterfall/:waterfallId", (req, res, next) => {
  const waterfallId = req.params.waterfallId;
  Waterfall.findById(waterfallId)
    .then((waterfallFromDB) => {
      res.render("waterfalls/waterfall-details", {
        waterfall: waterfallFromDB,
      });
    })
    .catch((e) => {
      console.log("Error getting waterfall details from DB", e);
      next(e);
    });
});

module.exports = router;
