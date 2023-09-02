const { Schema, model } = require("mongoose")

const waterfallSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },   
    imageUrl: {
        type: String,
        required: true,
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
        type: [String],
        enum: ["Bus", "Train", "Walking", "Car", "Boat", "Other"],
        required: true,
    },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
},
{
    timestamps: true
}
)



module.exports = model('Waterfall', waterfallSchema)