import { Router } from "express";
import { createBooking } from "../controllers/booking.controller";

const bookingRouter = Router();

// middleware needs to be applied later
bookingRouter.post('/create-booking', createBooking);

export default bookingRouter;
