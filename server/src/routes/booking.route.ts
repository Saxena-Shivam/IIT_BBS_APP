import { Router } from "express";
import { cancelBooking, createBooking, getOldBookings } from "../controllers/booking.controller";

const bookingRouter = Router();

// middleware needs to be applied later
bookingRouter.post('/create-booking', createBooking);
bookingRouter.patch('/cancel-booking', cancelBooking);
bookingRouter.get('/get-bookings', getOldBookings);

export default bookingRouter;
