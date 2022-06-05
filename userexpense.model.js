const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userexpenseSchema = new Schema({
    email: String,
    travel: Number,
    entertainment: Number,
    food: Number
});

module.exports = mongoose.model("UserExpense", userexpenseSchema);