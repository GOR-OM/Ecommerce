import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        pinCode: {
            type: Number,
            required: true,
            validator: function (v) {
                return /\d{6}/.test(v);
            },
            message: props => `${props.value} is not a valid pincode!`
            
        },
        phoneNo: {
            type: Number,
            required: true,
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
            
        },
    },

    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            }
        }
    ],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    paymentInfo: {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true

        }
    },
    paidAt: {
        type: Date,
        required: true
    },

    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    orderStatus: {
        type: String,
        required: true,
        default: "Processing"
    },
    deliveredAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

export const Order = mongoose.model("Order", orderSchema);
