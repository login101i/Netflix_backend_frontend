const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
// const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Proszę wpisać swoje imię"],
    maxLength: [30, "Twoje imię nie może być dłuższe niż 30 znaków"],
  },
  email: {
    type: String,
    required: [true, "Proszę wpisać adres e-mail"],
    unique: true,
    validate: [validator.isEmail, "Proszę podać poprawny adres email"],
  },
  password: {
    type: String,
    required: [true, "Proszę wpisać hasło"],
    minlength: [6, "Twoje hasło musi być większe niż 6 znaków"],
    select: false,
  },
  avatar: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrypting password before saving user
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   this.password = await bcrypt.hash(this.password, 10);
// });


// Return JWT token
// userSchema.methods.getJwtToken = function () {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_TIME
//     });
// }

module.exports = mongoose.model("User", userSchema);