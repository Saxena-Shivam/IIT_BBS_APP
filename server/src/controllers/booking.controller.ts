import { Request, Response, NextFunction } from "express";
import asyncHandler from "../../utils/asyncHandler";
import Booking, { IBooking } from "../model/booking.model";
import ApiResponse from "../../utils/ApiResponse";
import ApiError from "../../utils/ApiError";

export const createBooking = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { purpose, bookingStartsAt, bookingEndsAt, bookingFor }: IBooking =
      await req.body();

    if ([purpose, bookingStartsAt, bookingEndsAt, bookingFor].some((e) => !e))
      return res.status(400).json(new ApiError(400, "All fields are required"));

    const newBooking = await Booking.create({
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
