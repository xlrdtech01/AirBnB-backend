// backend/utils/validation.js
const { validationResult } = require('express-validator');

// Middleware for formatting errors from express-validator middleware
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errorObj = {};

    validationErrors.array().forEach((error) => {
      let key = error.param;
      errorObj[key] = error.msg;
    });

    const err = Error('Validation error');
    err.errors = errorObj;
    err.status = 400;
    err.title = 'Bad request';
    next(err);
  }
  next();
};

// Middleware for handling validation errors in API responses
const handleApiValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errorObj = {};

    validationErrors.array().forEach((error) => {
      let key = error.param;
      errorObj[key] = error.msg;
    });

    const err = Error('Validation Error');
    err.message = 'Validation Error';
    err.statusCode = 400;
    err.errors = errorObj;
    _res.status(400);
    return _res.json({
      message: err.message,
      statusCode: err.statusCode,
      errors: err.errors
    });
  }
  next();
};

module.exports = {
  handleValidationErrors,
  handleApiValidationErrors
};