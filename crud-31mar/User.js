const mongoose = require("mongoose");

const userAdd = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  name: { type: String },
  age: {
    type: Number,
    min: 18,
    max: 60,
    // validate: {
    //   validator: (v) => v % 2 === 0,
    //   msg: (props) => `${props.value} is not an even number.`,
    // },
  },
  email: {
    type: String,
    minlength: 10,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  bff: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  }, //User is the collection from which this bff belongs
  hobbies: [String],
  address: userAdd,
});

module.exports = new mongoose.model("User", userSchema);
