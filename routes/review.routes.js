const router = require("express").Router();
const Waterfall = require("../models/Waterfall.model");
// ********* require fileUploader in order to use it *********
const imageUploader = require("../config/cloudinary.config");
// ********* require fileUploader in order to use it *********
const Review = require("../models/Review.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

// POST: to add the review to the waterfall
  router.post("/waterfall/:waterfallId/reviews", isLoggedIn, imageUploader.single("waterfall-review-image"), async (req, res, next) => {
      try {
        const waterfall = await Waterfall.findById(req.params.waterfallId);
        const { rating, body } = req.body;
  
        const reviewData = {
          rating: rating,
          body: body,
          user: req.session.currentUser._id,
        };

        if (req.file) {
          reviewData.imageUrl = req.file.path;
        }
  
        const review = new Review(reviewData);
        waterfall.reviews.push(review._id);
        
        await review.save();
        await waterfall.save();
  
        res.redirect(`/waterfall/${waterfall._id}`);
      } catch (error) {
        console.log("Error adding review with image", error);
        next(error);
      }
    }
  );

// POST: delete review
router.post("/waterfall/:waterfallId/reviews/:reviewId/delete", async (req, res) => {
  const { waterfallId, reviewId } = req.params;
  await Waterfall.findByIdAndUpdate(waterfallId, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/waterfall/${waterfallId}`);
});

module.exports = router;
