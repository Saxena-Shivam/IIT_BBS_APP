// custom utility class to return consistent api response with statusCode

class ApiResponse {
  constructor(statusCode: number, message = "Success", data = null) {}
}

export default ApiResponse;
