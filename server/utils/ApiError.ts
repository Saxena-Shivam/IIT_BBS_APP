// custom error class to return consistent api error with statusCode

class ApiError extends Error {
  constructor(
    public _statusCode: number,
    public message = "Something went wrong",
    public _errors = []
  ) {
    super(message);
  }
}

export default ApiError;
