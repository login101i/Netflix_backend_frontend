const jwt = require("jsonwebtoken");

// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {
  // Create Jwt token
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_TIME }
  );

  // Options for cookie
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  const { password, ...info } = user._doc;

  res.status(statusCode).cookie("tokenes", accessToken, options).json({
    success: true,
    accessToken,
    info,
  });
};

module.exports = sendToken;
