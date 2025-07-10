// custom utility class to return consistent api response with statusCode

import { IBooking } from "../src/model/booking.model";

class ApiResponse<T> {
  constructor(public _statusCode: number, public _message = "Success", public _data?: T) {}
}

export default ApiResponse;
