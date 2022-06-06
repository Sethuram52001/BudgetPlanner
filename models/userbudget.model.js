const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userbudgetSchema = new Schema({
    email: String,
    budget: Number,
    expense: Number,
    savings: Number
});

module.exports = mongoose.model("UserBudget", userbudgetSchema);