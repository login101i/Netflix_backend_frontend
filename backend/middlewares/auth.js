const User = require("../models/User");

const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { tokenes } = req.cookies;
 

  if (!tokenes) {
    return next(new ErrorHandler("Najpierw zaloguj się aby uzyskać dostęp do danych.", 401));
  }

  const decoded = jwt.verify(tokenes, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  // console.log("Poniżej decoded")
  // console.log(decoded)

  // console.log("To jest user");
  // console.log(req.user);

  next();
});



//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   req.user = await User.findById(decoded.id);

//   next();
// });



// // Handling users roles
// exports.authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(new ErrorHandler(` (${req.user.isAdmin}) nie jest upoważniony do wglądu tych plików`, 403));
//     }
//     next();
//   };
// };


// // Handling users roles
exports.authorizeRoles = () => {
  return (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(new ErrorHandler(`Nie jestes upoważniony do wglądu tych plików`, 403));
    }
    next();
  };
};
