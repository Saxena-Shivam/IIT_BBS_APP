// custom error class to return consistent api error with statusCode

class ApiError extends Error {
  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors = []
  ) {
    super(message);
  }
}

export default ApiError;
