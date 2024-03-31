export const errorHandler = (statusCode, message) => {
  // we created a new error with the help of class
  const error = new Error();
  /// then in object error
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
