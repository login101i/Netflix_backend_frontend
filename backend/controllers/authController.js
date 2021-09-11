const User = require("../models/User");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const sendToken = require("../utils/jwtToken");


exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZtlkHFL5gQf7hDz5ZnkBlWT9H0ETbkWCGKb2ijSZHrvq5CBGoVrajFDfc3dPHv8EQfA&usqp=CAU",
  });

//   const accessToken = jwt.sign(
//     {
//       id: user._id,
//       isAdmin: user.isAdmin,
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRES_TIME }
//   );

//   res.status(201).json({
//     success: true,
//     accessToken,
//     user,
//   });

sendToken(user, 201, res)
});

// api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // Checks if email and password is entered by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  // Finding user in database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // Checks if password is correct or not
  const validPassword = await bcrypt.compare(password, user.password);
  console.log(validPassword);

  if (!validPassword) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

//   const accessToken = jwt.sign(
//     {
//       id: user._id,
//       isAdmin: user.isAdmin,
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRES_TIME }
//   );

//   res.status(201).json({
//     success: true,
//     accessToken,
//     user,
//   });
sendToken(user, 200, res);
});


// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})