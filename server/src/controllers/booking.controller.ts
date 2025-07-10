import { Request, Response, NextFunction } from "express";
import asyncHandler from "../../utils/asyncHandler";
import Booking, { IBooking } from "../model/booking.model";
import ApiResponse from "../../utils/ApiResponse";
import ApiError from "../../utils/ApiError";

export const createBooking = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { purpose, bookingStartsAt, bookingEndsAt, bookingFor }: IBooking =
      await req.body();

    if ([purpose, bookingStartsAt, bookingEndsAt, bookingFor].some((e) => !e))
      return res.status(400).json(new ApiError(400, "All fields are required"));

    const newBooking = await Booking.create({
      // bookedBy: req.user._id, // will be done when authentication setup is done
      purpose,
      bookingStartsAt,
      bookingEndsAt,
      bookingFor,
    });

    if (!newBooking)
      return res.status(400).json(new ApiError(400, "Booking failed"));

    return res.status(201).json(new ApiResponse(201, "Booking Successful"));
  }
);

export const cancelBooking = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { bookingId } = await req.body();
    const cancelledBooking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        $set: { status: "Cancelled" },
      },
      { new: true }
    );

    if (!cancelledBooking)
      return res
        .status(400)
        .json(new ApiError(400, "Failed to cancel booking"));

    return res
      .status(200)
      .json(new ApiResponse(200, "Booking Cancelled Successfully"));
  }
);

export const getOldBookings = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const oldBookings = await Booking.find({
      // bookedBy: req.user._id 
      // will be used when middlware set up will be done
    }).lean();

    if (!oldBookings)
      return res
        .status(400)
        .json(new ApiError(400, "Failed to find old bookings"));

    return res
      .status(200)
      .json(new ApiResponse(200, "Old bookings found", oldBookings));
  }
);
