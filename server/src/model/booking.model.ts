import mongoose, { model, Schema } from "mongoose";
export interface IBooking {
  bookedBy: mongoose.Types.ObjectId;
  purpose: string;
  bookingStartsAt: Date;
  bookingEndsAt: Date;
  status: "Pending" | "Cancelled" | "Approved" | "Rejected";
  bookingFor:
    | "Multipurpose"
    | "RISC"
    | "Kalakriti"
    | "Auditorium"
    | "Comunity Center"
    | "Bus";
  // bus will have diff no., handle this later
  approvedBy?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    bookedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    purpose: {
      type: String,
      trim: true,
      required: [true, "Purpose of booking is required"],
    },
    bookingStartsAt: {
      type: Date,
      required: [true, "Starting time of booking is required"],
    },
    bookingEndsAt: {
      type: Date,
      required: [true, "Ending time of booking is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Approved", "Rejected"],
      default: "Pending",
    },
    bookingFor: String,
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = model<IBooking>("Booking", bookingSchema);

export default Booking;
