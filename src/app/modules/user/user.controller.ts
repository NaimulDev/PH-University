import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  // const zodParsedData = userValidation.userValidationSchema.parse(studentData)

  // will call service func to send this data
  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is retrieved successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
