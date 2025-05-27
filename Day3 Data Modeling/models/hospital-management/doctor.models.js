import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    specialty: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    yearsOfExperience: {
      type: Number,
      default: 0,
      required: true,
    },
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
    worksInHopitals:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      }
    ]
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
