const router = require("express").Router();
const Waterfall = require("../models/Waterfall.model");

// GET: see all waterfalls
router.get("/waterfalls", (req, res, next) => {
  Waterfall.find()
    .then((allWaterfalls) =>
      res.render("waterfalls/waterfalls-list", { waterfalls: allWaterfalls })
    )
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
router.post("/waterfall/create", (req, res, next) => {
  const { name, postalCode, country, city, transportation } = req.body;


  Waterfall.create({ name, postalCode, country, city, transportation })
    .then((newWaterfall) => {
      res.redirect("/waterfalls");
    })
    .catch((e) => {
      console.log("error adding new watefall to DB", e);
      next(e);
    });
});

// GET: display form to edit an existing waterfall
router.get("/waterfall/:waterfallId/edit", async (req, res, next) => {
  const { waterfallId } = req.params;
console.log(waterfallId)

  try {
    const waterfallDetails = await Waterfall.findById(waterfallId);

    res.render("waterfalls/waterfall-edit", { waterfall: waterfallDetails });
  } catch (e) {
    console.log("error updating waterfall", e);
    next(e);
  }
});
 
 // POST: process edited waterfall data & redirect to updated details page
router.post("/waterfall/:waterfallId/edit", async (req, res, next) => {
    const { waterfallId } = req.params;
    const { name, postalCode, country, city, transportation } = req.body;
  
    Waterfall.findByIdAndUpdate(waterfallId, { name, postalCode, country, city, transportation }, { new: true })
    .then(updatedWaterfall => res.redirect(`/waterfall/${updatedWaterfall.id}`))
    .catch((e) => {
        console.log("error updating waterfall", e);
        next(e);
      });
  });

  // POST: delete waterfall
  router.post('/waterfall/:waterfallId/delete', (req, res, next) => {
    const { waterfallId } = req.params;

    Waterfall.findByIdAndDelete(waterfallId)
        .then(() => res.redirect('/waterfalls'))
        .catch((e) => {
            console.log("error deleting waterfall", e);
            next(e);
          });
});

// GET: display details of a waterfall
router.get("/waterfall/:waterfallId", (req, res, next) => {
    const waterfallId = req.params.waterfallId;
    Waterfall.findById(waterfallId)
        .then(waterfallFromDB => {
            res.render("waterfalls/waterfall-details", { waterfall: waterfallFromDB });
        })
        .catch((e) => {
            console.log("Error getting waterfall details from DB", e);
            next(e);
        })

})

module.exports = router;
