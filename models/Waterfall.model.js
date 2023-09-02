const { Schema, model } = require("mongoose")

const waterfallSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },   
    image: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: false,
    },
    transportation: {
        type: [String],
        enum: ["Bus", "Train", "Walking", "Car", "Other"],
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
)



module.exports = model('Waterfall', waterfallSchema)