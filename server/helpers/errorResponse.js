const errorResponse = (error, statusCode, response) => response.status(statusCode).json({
  success: false,
  error
});

export default errorResponse;
