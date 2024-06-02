import { Schema, model, connect } from "mongoose";
import { TStudent } from "./student/student.interface";

// Guardian Schema
const guardianSchema = new Schema({
  fatherName: { type: String, trim: true, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, trim: true, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// LocalGuardian Schema
const localGuardianSchema = new Schema({
  name: { type: String, trim: true, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  name: {
    firstName: {
      type: String,
      trim: true,
      required: [true, "First Name is required"],
      maxlength: [20, "First Name can not be more then 20 charactars"],
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message:
        "The gender field can only be on of the following: 'male', 'female'.",
    },
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: String,
});

export const StudentModel = model<TStudent>("Student", studentSchema);
