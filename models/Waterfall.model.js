const { Schema, model } = require("mongoose");

const waterfallSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    transportation: {
      type: String,
      required: false,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        // required: true,
      },
      coordinates: {
        type: [Number],
        // required: true,
      },
    },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Waterfall", waterfallSchema);
